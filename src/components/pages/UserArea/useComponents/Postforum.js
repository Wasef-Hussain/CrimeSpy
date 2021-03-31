import React from 'React'
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

const Postforum = ({isOpen,onClose}) =>{
    return (
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
    )
}
export default Postforum