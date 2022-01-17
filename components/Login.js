/* eslint-disable react/jsx-no-bind */
import { FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import { v4 as uuidV4 } from 'uuid';
import styled from '@emotion/styled';
import '@fontsource/comic-neue';

const LoginComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  max-width: 1000px;
  gap: 3rem;
  form {
    max-width: 500px;
  }
  h1 {
    font-family: 'Comic Neue';
    text-align: center;
    font-size: 5rem;
    font-weight: 700;
  }
`;

const Login = ({ onIdSubmit }) => {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  }

  function createNewId() {
    onIdSubmit(uuidV4());
  }

  return (
    <LoginComponent>
      <h1>🐕 heybbb.club 🍕</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <FormControl isRequired colorScheme="whatsapp">
          <FormLabel htmlFor="id-input">
            Enter your ID or create a new one!
          </FormLabel>
          <Input id="id-input" type="text" ref={idRef} m="1rem 0" />
          {/* {!isError ? (
            <FormHelperText>
              Choose a user id or click below to create a random one.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )} */}
        </FormControl>
        <Button type="submit" variant="solid" colorScheme="whatsapp" mr="1rem">
          Login
        </Button>

        <Button onClick={createNewId} variant="outline" colorScheme="whatsapp">
          Create a new ID
        </Button>
      </form>
    </LoginComponent>
  );
};

export default Login;
