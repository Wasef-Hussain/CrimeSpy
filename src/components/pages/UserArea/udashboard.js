import React from 'react'
import Head from './useComponents/header'
import { useAuth} from '../../../LoginContext'
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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Center,
  Icon,} from '@chakra-ui/react'
import {ImMenu,ImExit} from 'react-icons/im'
import {RiDashboardFill, RiSettings5Fill} from 'react-icons/ri'
import {FaUserAlt,FaMapMarkedAlt,FaArrowUp,FaArrowDown,FaComment} from 'react-icons/fa'
import {GiPistolGun, GiTribalMask} from 'react-icons/gi'
import {HiDotsHorizontal} from 'react-icons/hi'
import {useState} from 'react'
import Drawer from './useComponents/drawer'
import Dashhome from './useComponents/Dashhome'
import Post from './useComponents/Postdisplay'
import LogoutAlert from './useComponents/LogoutAlert'
import AddPostForum from './useComponents/AddPostforum'
import { Add } from '@material-ui/icons'


const Udashborad = () =>{
const [MenuHidden,setHiddenMenu] = useState(true)
const { currentUser, logout,submitsignInWithGoogle, addfbuser } = useAuth()
// const [Title,setTitle] = useState('')
// const [Discription,setDiscription] = useState('')
// const [Location,setLocation] = useState('')
const [Posts,setPost] = useState([
 
      ])

const Addpost = useDisclosure()
const Logoffalert = useDisclosure()

// Menu button to display task bar
const toHide = () =>{
  setHiddenMenu((previous)=>{
   return !previous 
  })
}
// add post fuction 
const makePost = (task) =>{
  const id = Math.floor(Math.random()*1000)+1
  const newPost = {id,...task}
  setPost((previous)=>{return[newPost,...previous]})
  
}
// remove a Post
const removePost = () =>{}

// logut function
const loggingout = () =>{

}



return(
  <>
    <Head  Task={toHide}/>
    <Flex w="100%" height="100%">
    <Drawer MenuHidden={MenuHidden} LastOpt={Logoffalert.onOpen}/>
    <Box w="100%" h="calc(100vh - 78px)" bg="#8c8c8b"  overflowY="scroll">
    
    
    
    <Dashhome Posts={Posts} Task={Addpost.onOpen}/>
    

    

    </Box>
    </Flex>


    {/*    Post forum     */}
    <AddPostForum IsOverlayOpen={Addpost.isOpen} OverlayOnClose={Addpost.onClose} OnAdd={makePost}/>
    

    {/*   Logout Alert   */}
    <LogoutAlert LogOverLayisOpen={Logoffalert.isOpen} LogOverLayonClose={Logoffalert.onClose}/>
      

  </>
)
}
export default Udashborad 