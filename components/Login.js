/* eslint-disable react/jsx-no-bind */
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useRef } from 'react';
import { v4 as uuidV4 } from 'uuid';

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
    <form onSubmit={handleSubmit} className="login-form">
      <FormControl isRequired>
        <FormLabel htmlFor="id-input">Enter your ID</FormLabel>
        <Input id="id-input" type="text" ref={idRef} />
        {/* {!isError ? (
            <FormHelperText>
              Choose a user id or click below to create a random one.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )} */}
      </FormControl>
      <Button type="submit">Login</Button>

      <Button onClick={createNewId} variant="secondary">
        Create a new ID
      </Button>
    </form>
  );
};

export default Login;
