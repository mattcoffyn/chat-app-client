import { Button, StackDivider, VStack } from '@chakra-ui/react';
import { useConversations } from '../lib/context/ConversationsProvider';

const Conversations = () => {
  const { conversations, selectConversationIndex } = useConversations();

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="flex-start"
    >
      {conversations.map((conversation, i) => (
        <Button
          key={i}
          isActive={conversation.selected}
          onClick={() => selectConversationIndex(i)}
          variant="link"
          colorScheme="whatsapp"
        >
          {conversation.recipients.map((r) => r.name).join(', ')}
        </Button>
      ))}
    </VStack>
  );
};

export default Conversations;
