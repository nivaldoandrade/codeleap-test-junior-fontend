import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../actions/user/actions';
import { Input } from '../../Components/Input';

import { Container, Content, Title, Subtitle, Form, Button } from './styles';

export function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  useEffect(() => {
    document.title = `Signup - ${document.title}`;
  }, []);

  const handleSetUser = useCallback(() => {
    if (!username) {
      return;
    }

    const user = {
      name: username.replace(/\s+/g, ' ').trim(),
    };

    dispatch(setUser(user));
    navigate('/mainscreen');
  }, [dispatch, username, navigate]);

  return (
    <Container>
      <Content>
        <Title>Welcome to CodeLeap network!</Title>
        <Subtitle>Please enter your username</Subtitle>
        <Form onSubmit={handleSetUser}>
          <Input
            type="text"
            id="username"
            placeholder="John Doe"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Button disabled={!username}>enter</Button>
        </Form>
      </Content>
    </Container>
  );
}
