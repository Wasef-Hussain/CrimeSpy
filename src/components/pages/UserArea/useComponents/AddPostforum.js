import React from 'react'
import {useState} from 'react'
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
const AddPostForum=({IsOverlayOpen,OverlayOnClose,OnAdd})=>{
    const [Title,setTitle] = useState('')
    const [Discription,setDiscription] = useState('')
    const [Location,setLocation] = useState('')
    
    const CompleteTask = () =>{
        if((Title.trim() === (''))||(Location.trim()===(''))||(Discription.trim()===('')))
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
    
    return(
        <Modal isOpen={IsOverlayOpen} onClose={OverlayOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Crime</ModalHeader>
          <ModalCloseButton />
          
          <ModalBody>
          <form >
                <Box w="100%">
                    <Text>Enter Short Title</Text>
                    <Input variant="outline" placeholder="Short Title" value={Title} onChange={(e)=>setTitle(e.target.value)}/>
                </Box>
                <Box w="100%">
                    <Text>Enter Location or Address</Text>
                    <Input variant="outline" placeholder="Location" value={Location} onChange={(e)=>setLocation(e.target.value)} />
                </Box>
                <Box w="100%">
                    <Text>Enter description</Text>
                    <Textarea value={Discription} onChange={(e)=>setDiscription(e.target.value)} />
                </Box>
                <Button variant="solid" colorScheme="orange" w="100%">Add Images</Button>
          </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="yellow" mr={3} onClick={OverlayOnClose}>
              Close
            </Button>
            <Button variant="outline" onClick={CompleteTask}>Post</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> 
    )
}
export default AddPostForum