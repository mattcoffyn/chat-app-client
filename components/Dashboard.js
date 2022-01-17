import { Grid } from '@chakra-ui/react';
import { useConversations } from '../lib/context/ConversationsProvider';
import OpenConversation from './OpenConversation';
import Sidebar from './Sidebar';

const Dashboard = ({ id }) => {
  const { selectedConversation } = useConversations();
  return (
    <Grid templateColumns="250px auto" gap={0}>
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </Grid>
  );
};

export default Dashboard;
