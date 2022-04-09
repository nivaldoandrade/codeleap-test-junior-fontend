import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import { Navigate } from 'react-router-dom';

import { deleteUser } from '../../actions/user/actions';

import { FormCreatePost } from '../../Components/FormCreatePost';
import { PostsListComp } from '../../Components/PostsList';

import { UserProps, UserState } from '../../types/userTypes';

import { Container, Header, Main, FormContent } from './styles';

export function MainScreen() {
  const dispatch = useDispatch();
  const user = useSelector<UserState, UserProps>(state => state.user);

  useEffect(() => {
    document.title = `Feed - ${document.title}`;
  }, []);

  if (!user.name) {
    return <Navigate to="/signup" replace />;
  }

  function handleLogout() {
    dispatch(deleteUser());
  }

  return (
    <Container>
      <Header>
        <h1>CodeLeap Network</h1>
        <Icon icon="ri:logout-circle-line" onClick={handleLogout} />
      </Header>
      <Main>
        <FormContent>
          <h1>What’s on your mind?</h1>
          <FormCreatePost />
        </FormContent>
        <PostsListComp />
      </Main>
    </Container>
  );
}
