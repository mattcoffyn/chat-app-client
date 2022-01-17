import { ListItem, UnorderedList } from '@chakra-ui/react';
import { useContacts } from '../lib/context/ContactsProvider';

const Contacts = () => {
  const { contacts } = useContacts();
  return (
    <UnorderedList>
      {contacts?.map((contact) => (
        <ListItem key={contact.id}>{contact.name}</ListItem>
      ))}
    </UnorderedList>
  );
};

export default Contacts;
