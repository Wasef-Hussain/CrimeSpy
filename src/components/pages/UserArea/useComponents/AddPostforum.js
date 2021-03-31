import React from 'react'
import {useState, useRef} from 'react'
import {Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    Text,
    Textarea,
    Box,} from '@chakra-ui/react'
import { GiTribalMask } from 'react-icons/gi'
import './AddPostforum.css'
import { db, storage } from '../../../firebase'
import makeid from '../../../../helper/function'
import {useAuth} from '../../../../LoginContext'
import firebase from "firebase"
const AddPostForum=({IsOverlayOpen,OverlayOnClose,OnAdd})=>{
    const [Title,setTitle] = useState('')
    const [Discription,setDiscription] = useState('')
    const [Location,setLocation] = useState('')
    const fileimageRef = useRef();
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const {currentUser} = useAuth();
    
    const CompleteTask = () =>{
        if((Title.trim() === (''))||(Discription.trim()===('')))
        {
          alert('Please correctly fill all fields')
          return
        }
        OnAdd({Title,Discription,Location})
        setTitle('')
        setDiscription('')
        setLocation('')
        OverlayOnClose()
    }

    const handleChange = (e) =>{
      e.preventDefault();
      if(e.target.files[0]){
        setImage(e.target.files[0]);
        var selectedImageSrc = URL.createObjectURL(e.target.files[0]);

        var imagepreview = document.getElementById("image-preview");
        imagepreview.src = selectedImageSrc;
        imagepreview.style.display = "block"
      }
      
    }

    const handleUpload = (e) =>{
      e.preventDefault();
      if((Title.trim() === (''))||(Discription.trim()===('')))
        {
          alert('Please correctly fill all fields')
          return
        }
      if(image)
      {
        var imageName = makeid(10);
        const uploadTask = storage.ref(`images/${imageName}.jpg`).put(image);
        uploadTask.on("state_changed", (snapshot) =>{
            // progress Funtion 1%
          const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
          setProgress(progress);

          },(error) =>{
            console.log(error);
          }, () =>{
            // GET DOWNLOAD URL AND UPLOAD THE POST INFO
            storage.ref("images").child(`${imageName}.jpg`).getDownloadURL()
            .then((imageUrl) => {
              db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                Title: Title,
                Discription: Discription,
                photoUrl: imageUrl,
                userName: currentUser.displayName.toLowerCase(),
                profileUrl: currentUser.photoURL
              });
            });
            setTitle('');
            setDiscription('');
            setProgress(0);
            setImage(null);
            OverlayOnClose();


            document.getElementById("image-preview").style.display = "none";
          })
      }
    }
    
    const handleImageUpload = (e) =>{
      e.preventDefault();
      fileimageRef.current.click();
    }

    
    return(
        <Modal isOpen={IsOverlayOpen} onClose={OverlayOnClose}>
        <ModalOverlay />
        <ModalContent style={{width:"100%"}}>
          <ModalHeader>Add Crime</ModalHeader>
          <ModalCloseButton />
          
          <ModalBody>
          <form >
                <Box w="100%">
                    <Text>Enter Short Title</Text>
                    <Input variant="outline" placeholder="Short Title" value={Title} onChange={(e)=>setTitle(e.target.value)}/>
                </Box>
                {/* <Box w="100%">
                    <Text>Enter Location or Address</Text>
                    <Input variant="outline" placeholder="Location" value={Location} onChange={(e)=>setLocation(e.target.value)} />
                </Box> */}
                <Box w="100%">
                    <Text>Enter description</Text>
                    <Textarea value={Discription} onChange={(e)=>setDiscription(e.target.value)} placeholder="Enter Text Here"/>
                </Box>
                <div className="image_upload">
                <input id="fileinput" type="file" accept="image/*" onChange={handleChange} style={{display:'none'}} ref={fileimageRef}/>
               <label htmlFor="fileinput">
               <Button variant="solid" colorScheme="orange" w="100%" style={{cursor:'pointer'}} onClick={handleImageUpload}>Add Images</Button>
               </label>
                </div>
                
          </form>
          </ModalBody>

          <ModalFooter>
          <div className="image_preview">
          <img id="image-preview" alt="" />
          </div>
            <Button colorScheme="yellow" mr={3} onClick={OverlayOnClose}>
              Close
            </Button>
            <Button variant="outline" onClick={handleUpload} style={{color: Discription? "#000" : "lightgray"}}>{`Post ${progress != 0 ? progress: ""}`}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> 
    )
}
export default AddPostForum