import React from 'react'
import {AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
}from '@chakra-ui/react'
const LogoutAlert=({LogOverLayisOpen,LogOverLayonClose})=>{
    return(
        <AlertDialog
        isOpen={LogOverLayisOpen}
        onClose={LogOverLayonClose}
        isCentered
        >
        <AlertDialogOverlay>
          <AlertDialogContent bgColor="gray.200">
            <AlertDialogHeader fontSize="lg" borderTopRadius="4px" fontWeight="bold" bgColor="#221c22" color="gray.400">
              Log out Confirmation
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You want to log out.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button  onClick={LogOverLayonClose}>
                Cancel
              </Button>
              <Button colorScheme="yellow" onClick={LogOverLayonClose} ml={3}>
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

    )
}
export default LogoutAlert