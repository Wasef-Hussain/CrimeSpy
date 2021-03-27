import React from 'react'
import Post from './Postdisplay'
import {GiPistolGun} from 'react-icons/gi'
import {
    Box,
    Text,
    Button,
    Center,
    } from '@chakra-ui/react'

const Dashhome=({Task,Posts})=>{
return(
    <>
    
    <Box w="80%"  mx="auto" mt="10px" padding="15px" bg="#c1c1c1" borderRadius="5px"> 
        
        <Text mb="10px">Would you like to add a Crime! The gun icon is not for threats!</Text>
        
        <Center w="100%">
        <Button mx="auto"  onClick={Task} rightIcon={<Box as={GiPistolGun} fontSize="30px" />} >Add Crime</Button>
        </Center>
    </Box>  

    
    {
      Posts.map((post,index)=>{return(<Post Title={post.Title} Discription={post.Discription} Location={post.Location}/>)})
    } 

    </>
)
}
export default Dashhome 