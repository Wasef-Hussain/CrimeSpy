import React from 'react'
import {Box,Text,Button,Flex,Heading,Image,Avatar,HStack,IconButton,VStack,Icon} from '@chakra-ui/react'
import {ImMenu,ImExit} from 'react-icons/im'
import {RiDashboardFill, RiSettings5Fill} from 'react-icons/ri'
import {FaUserAlt,FaMapMarkedAlt} from 'react-icons/fa'

const NavItem = ({ icon, children }) =>{
return(
    <Box w="200px"> 
        <Button variant="link" leftIcon={<Box as={icon} fontSize="30px" />}>
            {children}
        </Button>
    </Box>
)}
export default NavItem
