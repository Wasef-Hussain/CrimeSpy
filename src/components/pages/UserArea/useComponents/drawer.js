import React from 'react'
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
    Textarea,
    Icon} from '@chakra-ui/react'
import {ImMenu,ImExit} from 'react-icons/im'
import {RiDashboardFill, RiSettings5Fill} from 'react-icons/ri'
import {FaUserAlt,FaMapMarkedAlt} from 'react-icons/fa'
import {GiPistolGun} from 'react-icons/gi'
import NavItem from './drawerListItem'
const Drawer = ({MenuHidden}) =>{
return (
    
    <VStack py="36px" spacing="30px" position={{ base: "absolute", "640px": "static" }} zIndex="docked" w={{ base:"100%", "640px": "30%" }} minH="calc(100vh - 78px)" align="center" m="0" bg="#ededea" left={MenuHidden?"-100%":"0"} transition="all 400ms ease">
        <NavItem icon={RiDashboardFill}>Dashboard</NavItem>
        <NavItem icon={FaUserAlt}>Profile</NavItem>
        <NavItem icon={FaMapMarkedAlt}>Crime Map</NavItem>
        <NavItem icon={RiSettings5Fill}>Settings</NavItem>
        <NavItem icon={ImExit}>Logout</NavItem>
    </VStack>
    
)
}
export default Drawer