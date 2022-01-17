import Head from 'next/head';
import Login from '../components/Login';
import useLocalStorage from '../lib/useLocalStorage';

const Home = () => {
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

      <Login onIdSubmit={setId} />
    </>
  );
};

export default Home;
