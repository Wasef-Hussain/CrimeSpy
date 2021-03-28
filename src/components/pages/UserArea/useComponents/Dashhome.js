import React, {useState, useEffect} from 'react'
import Post from './Postdisplay'
import {GiPistolGun} from 'react-icons/gi'
import {
    Box,
    Text,
    Button,
    Center,
    } from '@chakra-ui/react'
import { db } from '../../../firebase'

const Dashhome=({Task,Posts})=>{
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      db.collection("posts").onSnapshot((snapshot) =>{
        setPosts(snapshot.docs.map((doc) => ({id: doc.id, post: doc.data()})))
      })
    }, [])
return(
    <>
    
    <Box w="80%"  mx="auto" mt="10px" padding="15px" bg="#c1c1c1" borderRadius="5px"> 
        
        <Text mb="10px">Would you like to add a Crime! The gun icon is not for threats!</Text>
        
        <Center w="100%">
        <Button mx="auto"  onClick={Task} rightIcon={<Box as={GiPistolGun} fontSize="30px" />} >Add Crime</Button>
        </Center>
    </Box>  

   

     {
         posts.map(({id,post}) =>{
             return <Post
                key = {id}
                id = {id} 
                profileUrl={post.profileUrl}
                username={post.username}
                photoUrl = {post.photoUrl}
                Discription = {post.Discription}
             />
         })
     }

    </>
)
}
export default Dashhome 