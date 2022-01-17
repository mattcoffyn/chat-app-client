import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import Contacts from './Contacts';
import Conversations from './Conversations';
import { useContacts } from '../lib/context/ContactsProvider';
import { ContactsModal, ConversationModal } from './Modal';
import { useConversations } from '../lib/context/ConversationsProvider';

const TabComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  border-right: 1px solid lightgrey;
  .sidebar-lower {
    border-top: 1px solid lightgrey;
    p {
      margin: 1rem 0 1rem 0.5rem;
      span {
        color: var(--chakra-colors-green-400);
        font-weight: 600;
      }
    }
    button {
      border-radius: 0;
      width: 100%;
      height: 3rem;
    }
  }
`;

const Sidebar = ({ id }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { createContact, contacts } = useContacts();
  const { createConversation } = useConversations();

  return (
    <>
      <TabComponent>
        <Tabs
          colorScheme="whatsapp"
          variant="enclosed"
          onChange={(index) => setTabIndex(index)}
        >
          <TabList>
            <Tab>Conversations</Tab>
            <Tab>Contacts</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Conversations />
            </TabPanel>
            <TabPanel>
              <Contacts />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <div className="sidebar-lower">
          <p>
            Your ID: <span>{id}</span>
          </p>
          <Button onClick={onOpen} colorScheme="whatsapp">
            {tabIndex === 0 ? 'New Conversation' : 'New Contact'}
          </Button>
        </div>
      </TabComponent>

      {tabIndex === 0 ? (
        <ConversationModal
          createConversation={createConversation}
          contacts={contacts}
          isOpen={isOpen}
          onClose={onClose}
        />
      ) : (
        <ContactsModal
          createContact={createContact}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default Sidebar;
