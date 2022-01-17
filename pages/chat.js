import Head from 'next/head';
import Dashboard from '../components/Dashboard';

import { ContactsProvider } from '../lib/context/ContactsProvider';
import { ConversationsProvider } from '../lib/context/ConversationsProvider';
import { SocketProvider } from '../lib/context/SocketProvider';

import useLocalStorage from '../lib/useLocalStorage';

const Chat = () => {
  const [id, setId] = useLocalStorage('id');

  return (
    <>
      <Head>
        <title>🍕 🥳 😘</title>
        <meta name="description" content="heybbbbbbbbbbbbbbbbb" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤌</text></svg>"
        />
      </Head>

      <SocketProvider id={id}>
        <ContactsProvider>
          <ConversationsProvider id={id}>
            <Dashboard className="dashboard" id={id} />
          </ConversationsProvider>
        </ContactsProvider>
      </SocketProvider>
    </>
  );
};

export default Chat;
