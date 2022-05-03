import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { createSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';
import { mutate } from 'swr';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
  useDisclosure,
  useToast
} from '@chakra-ui/react';

const AddSiteModal = ({ children }) => {
  const initialRef = useRef();
  const toast = useToast();
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register } = useForm();
  const onCreateSite = ({ name, url }) => {
    const newSite = {
      authorId: user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
      settings: {
        icons: true,
        timestamp: true,
        ratings: false
      }
    };
    const { id } = createSite(newSite);
    toast({
      title: 'Success!',
      description: "We've added your site",
      status: 'success',
      duration: 5000,
      isClosable: true
    });
    mutate(
      ['/api/sites', user.token],
      async (data) => ({
        sites: [{ id, ...newSite }, ...data.sites]
      }),
      false
    );
    onClose();
  };
  return (
    <>
      <Button
        id="add-site-modal-button"
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        {children}
      </Button>{' '}
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                id="site-name"
                placeholder="My site"
                name="name"
                ref={register({
                  required: 'Required'
                })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                id="site-url"
                placeholder="https://website.com"
                name="url"
                ref={register({
                  required: 'Required'
                })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button
              id="add-site-submit"
              backgroundColor="#99FFFE"
              color="#194D4C"
              fontWeight="medium"
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
