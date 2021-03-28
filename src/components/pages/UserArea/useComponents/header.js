import React from 'react'
import {Box,Flex,Heading,Image,Avatar,HStack,IconButton} from '@chakra-ui/react'
import { useAuth} from '../../../../LoginContext'
import {ImMenu} from 'react-icons/im'
const Head = ({Task}) =>{
  const { currentUser, logout,submitsignInWithGoogle, addfbuser } = useAuth()
  console.log(currentUser)
return(
    <Flex boxSizing="border-box" position="static" w="100%" bgColor="#221c22" m="0" p="15px" color="white" justify='space-between' align="center">
      
      <HStack spacing="10px">

      <Avatar src={currentUser.photoURL} name="Syed Abdullah Shah" size="md" >

      </Avatar>
      <Heading size="md">
        {currentUser.displayName}
      </Heading>
        
      </HStack>
      
      <Box >
        <IconButton p="5px" icon={<Box as={ImMenu} fontSize="30px"></Box>} variant="link" size="md" color="white" onClick={(e)=>Task()} display={{ base: "block", "640px": "none" }}>

        </IconButton>
      </Box>
      
    </Flex>
)
}
export default Head