/* eslint-disable react/jsx-no-bind */
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  FormControl,
  IconButton,
  Tag,
  Textarea,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import { useConversations } from '../lib/context/ConversationsProvider';

const ConversationContainer = styled(Flex)`
  height: 100vh;
  background: var(--chakra-colors-gray-100);
  flex-direction: column;
  justify-content: space-between;
`;

const MessagesInner = styled(Flex)`
  width: 100%;
  padding: 0 1rem;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;

  .i-said-this {
    align-self: flex-end;
  }
`;

const ChatForm = styled.form`
  display: grid;
  grid-template-columns: auto 3rem;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  border-top: var(--chakra-colors-gray-200);
  button {
    height: 100%;
    background: var(--chakra-colors-whatsapp-500);
  }
`;

const OpenConversation = () => {
  const [text, setText] = useState('');
  const { sendMessage, selectedConversation } = useConversations();
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      text
    );
    setText('');
  }

  // function onKeyInput(e) {
  //   if (e.key === 'Enter' && e.shiftKey === false && !!e.target.value) {
  //     handleSubmit(e);
  //   }
  // }

  return (
    <ConversationContainer>
      <MessagesInner>
        {selectedConversation.messages.map((message, index) => {
          const lastMessage =
            selectedConversation.messages.length - 1 === index;

          return (
            <div
              ref={lastMessage ? setRef : null}
              className={message.fromMe ? 'i-said-this' : ''}
              key={index}
            >
              <Box
                whiteSpace="pre-wrap"
                bg={message.fromMe ? 'whatsapp.600' : 'gray.300'}
                color={message.fromMe ? 'whatsapp.50' : 'black'}
                padding="0.5rem 1rem"
                borderRadius="1rem"
                marginTop="1rem"
              >
                {message.text}
              </Box>
              <Tag>{message.fromMe ? 'You' : message.senderName}</Tag>
            </div>
          );
        })}
      </MessagesInner>
      <ChatForm onSubmit={handleSubmit}>
        <FormControl colorScheme="whatsapp">
          <Textarea
            id="chat"
            type="textarea"
            placeholder="Type to chat..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            // onKeyPress={(e) => onKeyInput(e)}
            // onSubmit={handleSubmit}
            required
            minH="3rem"
            resize="none"
            bg="chackra-colors-white"
          />
        </FormControl>
        <IconButton
          type="submit"
          aria-label="Search database"
          icon={<ArrowForwardIcon />}
        />
      </ChatForm>
    </ConversationContainer>
  );
};

export default OpenConversation;
