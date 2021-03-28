import React from 'react'
import Head from './useComponents/header'
import {Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,Box,
  Text,Button,Input,Flex,
  Heading,
  Image,
  Avatar,
  HStack,
  IconButton,
  VStack,
  InputGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Textarea,
  Icon} from '@chakra-ui/react'
import {ImMenu,ImExit} from 'react-icons/im'
import {RiDashboardFill, RiSettings5Fill} from 'react-icons/ri'
import {FaUserAlt,FaMapMarkedAlt,FaArrowUp,FaArrowDown,FaComment} from 'react-icons/fa'
import {GiPistolGun} from 'react-icons/gi'
import {HiDotsHorizontal} from 'react-icons/hi'
import {useState} from 'react'
import Drawer from './useComponents/drawer'
import Post from './useComponents/Postdisplay'


const Udashborad = () =>{
const [MenuHidden,setHiddenMenu] = useState(true)
// const [Post,setPost] = useState([
//   {
//     Title:"Robbery",
//     Discription:"A pair of robbers took my possession at gun point",
//     Location:"abclocation2ndstreetxyzcityof123state"
//     }])
const { isOpen, onOpen, onClose } = useDisclosure()
const toHide = () =>{
  setHiddenMenu((previous)=>{
   return !previous 
  })
}

return(
  <>
    <Head  Task={toHide}/>
    <Flex>
    <Drawer MenuHidden={MenuHidden}/>
    <VStack position="static" w="100%" h="auto" bg="#8c8c8b" minH="calc(100vh - 78px)" overflow="hidden">
    
    <Box w="80%" h="auto" mt="10px" padding="15px" bg="#c1c1c1" borderRadius="5px"> 
        
        <Text mb="10px">Would you like to add a Crime! The gun icon is not for threats!</Text>
        <Button float="right" onClick={onOpen} rightIcon={<Box as={GiPistolGun} fontSize="30px" />} >Add Crime</Button>
        
    </Box> 

    
    <Post/>

    </VStack>
    </Flex>
    
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Crime</ModalHeader>
          <ModalCloseButton />
          
          <ModalBody>
          <form>
            <Flex justify="space-between" mb="8px">
                    <Box w="40%">
                        <Text>Enter Longitude</Text>
                        <Input w="100%"/>
                    </Box>
                    <Box w="40%">
                        <Text>Enter Latitude</Text>
                        <Input w="100%" />
                    </Box>
            </Flex>
                <Box w="100%">
                    <Text>Enter description</Text>
                    <Textarea />
                </Box>
                <Button variant="solid" colorScheme="orange" w="100%">Add Images</Button>
          </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="yellow" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="outline">Post</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  </>
)
}
export default Udashborad 