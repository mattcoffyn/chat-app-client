import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  HStack,
  Button,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

export const ConversationModal = ({
  createConversation,
  contacts,
  isOpen,
  onClose,
}) => {
  const [contactsInConvo, setContactsInConvo] = useState([]);

  function handleAddtoConvo(contactId) {
    setContactsInConvo((prevContactsInConvo) => {
      if (prevContactsInConvo.includes(contactId)) {
        return prevContactsInConvo.filter((prevId) => contactId !== prevId);
      }
      return [...prevContactsInConvo, contactId];
    });
  }

  function handleStartConvo(e) {
    e.preventDefault();
    createConversation(contactsInConvo);
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Start a new conversation</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleStartConvo}>
            <FormControl as="fieldset">
              <FormLabel as="legend">Who do you want to talk to?</FormLabel>
              <CheckboxGroup colorScheme="whatsapp">
                <HStack spacing={[1, 5]} direction={['column', 'row']}>
                  {contacts?.map((contact) => (
                    <Checkbox
                      key={contact.id}
                      value={contact.id}
                      colorScheme="whatsapp"
                      onChange={() => handleAddtoConvo(contact.id)}
                    >
                      {contact.name}
                    </Checkbox>
                  ))}
                </HStack>
              </CheckboxGroup>
            </FormControl>
            <ButtonGroup
              variant="outline"
              spacing="6"
              style={{ marginTop: '2rem' }}
            >
              <Button
                type="submit"
                colorScheme="whatsapp"
                variant="solid"
                mr={3}
              >
                Add
              </Button>
              <Button
                colorScheme="whatsapp"
                variant="outline"
                onClick={onClose}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export const ContactsModal = ({ createContact, isOpen, onClose }) => {
  const idRef = useRef();
  const nameRef = useRef();

  function handleAddContact(e) {
    e.preventDefault();
    createContact(idRef.current.value, nameRef.current.value);
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a new contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleAddContact}>
            <FormControl isRequired>
              <FormLabel htmlFor="id-add">Enter an ID</FormLabel>
              <Input id="id-add" type="text" ref={idRef} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="name-add">Enter a name</FormLabel>
              <Input id="name-add" type="text" ref={nameRef} />
            </FormControl>
            <ButtonGroup
              variant="outline"
              spacing="6"
              style={{ marginTop: '2rem' }}
            >
              <Button
                type="submit"
                colorScheme="whatsapp"
                variant="solid"
                mr={3}
              >
                Add
              </Button>
              <Button
                colorScheme="whatsapp"
                variant="outline"
                onClick={onClose}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
