import React from 'react'
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

const Post = ({Title,Location,Discription}) =>{
return(
    <Box w="80%" h="auto" bg="#c1c1c1"  borderRadius="5px" overflow="hidden" mx="auto" mt="10px"> 
    <Flex justify="space-between" px="10px" py="5px" bgColor="#221c22">
      <Text fontWeight="bold" size="md" color="#ededea">
        {Title}
      </Text>
      <Menu>
    <MenuButton borderRadius="25px" as={IconButton} variant="link" icon={<Box size="25px" as={HiDotsHorizontal}></Box>}/>
    <MenuList>
    <MenuItem>Update</MenuItem>
    <MenuItem>Delete</MenuItem>
    </MenuList>
    </Menu>
    </Flex>
    
    <Image w="100%" src="https://via.placeholder.com/800x100" borderY="1px solid" ></Image>
    <Text size="sm" size="md" px="10px" py="5px">
       {Discription}
    </Text>
    <Text size="md" px="10px" py="5px">
      <Box as="span" fontWeight="bold">
        Location:
      </Box>
      {Location}
    </Text>
    <Flex  justify="space-between" overflow="hidden" borderRadius="0px">
    <Flex overflow="hidden" as={Button} borderRadius="0px" bg="ededea" leftIcon={<Box size="20px" as={FaArrowUp}></Box>} grow="1">Up Vote</Flex>
    <Flex overflow="hidden" as={Button} borderRadius="0px" bg="ededea" leftIcon={<Box size="20px" as={FaComment}></Box>} grow="1">Comment</Flex>
    <Flex overflow="hidden" as={Button} borderRadius="0px" bg="ededea" leftIcon={<Box size="20px" as={FaArrowDown}></Box>} grow="1">Down Vote</Flex>
    </Flex> 
    </Box> 
)
}
export default Post