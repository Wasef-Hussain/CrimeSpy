import React,{useState} from 'react'
import {Box,
    Text,
    Button,
    Flex,
    Image,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Icon} from '@chakra-ui/react'
  import {FaArrowUp,FaArrowDown,FaComment} from 'react-icons/fa'
  import {HiDotsHorizontal} from 'react-icons/hi'
import { Avatar } from '@material-ui/core'
import { useAuth } from '../../../../LoginContext'
import { db, storage } from '../../../firebase'

const Post = ({Title,Discription,profileUrl,id,photoUrl,comments, username}) =>{

  const { currentUser } = useAuth();
  const deletePost = () => {
    var imageRef = storage.refFromURL(photoUrl);

    imageRef.delete().then(function(){
      console.log("delete successfully");
    }).catch(function(error){
      console.log(`Errors ${error}`);
    });

    db.collection("posts").doc(id).delete().then(function(){
      console.log("delete Post info successfully");
    }).catch(function(error){
      console.log(`Errors post info ${error}`);
    });
  }

return(
    <Box w="60%" h="auto" bg="#c1c1c1"  borderRadius="5px" overflow="hidden" mx="auto" mt="10px"> 
    <Flex justify="space-between" px="10px" py="5px" bgColor="#221c22">
     
      <div style={{display:'flex'}}>
      <Avatar src={profileUrl}  size="md" style={{marginLeft:'0'}} >

</Avatar>
<Text fontWeight="bold" size="md" color="#ededea" style={{marginLeft:'10px'}}>
        {username}
      </Text>
      </div>
      <Text fontWeight="bold" size="md" color="#ededea">
        {Title}
      </Text>
    

      <Menu>
    <MenuButton borderRadius="25px" as={IconButton} variant="link" icon={<Box size="25px" as={HiDotsHorizontal}></Box>}/>
    <MenuList>
    <MenuItem onClick={deletePost}>Delete</MenuItem>
    </MenuList>
    </Menu>
    </Flex>
    
    <Image width="100%" src={photoUrl} borderY="1px solid" style={{margin:'16 0', objectFit:'cover'}} ></Image>
    <Text size="sm" size="md" px="10px" py="5px">
       {Discription}
    </Text>
    {/* <Text size="md" px="10px" py="5px">
      <Box as="span" fontWeight="bold">
        Location:
      </Box>
      {Location}
    </Text> */}
    <Flex  justify="space-between" overflow="hidden" borderRadius="0px">
    <Flex overflow="hidden" as={Button} borderRadius="0px" bg="ededea" leftIcon={<Box size="20px" as={FaArrowUp}></Box>} grow="1">Up Vote</Flex>
    <Flex overflow="hidden" as={Button} borderRadius="0px" bg="ededea" leftIcon={<Box size="20px" as={FaComment}></Box>} grow="1">Comment</Flex>
    <Flex overflow="hidden" as={Button} borderRadius="0px" bg="ededea" leftIcon={<Box size="20px" as={FaArrowDown}></Box>} grow="1">Down Vote</Flex>
    </Flex> 
    </Box> 
)
}
export default Post