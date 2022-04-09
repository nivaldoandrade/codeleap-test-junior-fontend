import { FormEvent, useCallback, useState } from 'react';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';

import api from '../../services/api';
import { queryClient } from '../../App';

import { UserProps, UserState } from '../../types/userTypes';

import { ButtonComp } from '../Button';
import { Input } from '../Input';
import { TextArea } from '../TextArea';

import { Form } from './styles';

export function FormCreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const user = useSelector<UserState, UserProps>(state => state.user);

  const createPost = useMutation(
    async () => {
      const response = await api.post('careers/', {
        username: user.name,
        title: title.trim(),
        content: content.trim(),
      });

      return response.data.results;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(`posts 1`);
        setTitle('');
        setContent('');
      },
    },
  );

  const handleOnSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!title && !content) {
        return;
      }

      await createPost.mutateAsync();
    },
    [title, content, createPost],
  );

  return (
    <Form onSubmit={handleOnSubmit}>
      <Input
        type="text"
        label="Title"
        placeholder="Hello world"
        id="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        maxLength={256}
      />
      <TextArea
        label="Content"
        placeholder="Content here"
        id="content"
        value={content}
        onChange={e => setContent(e.target.value)}
        maxLength={4096}
      />
      <ButtonComp type="submit" disabled={!(title && content)}>
        create
      </ButtonComp>
    </Form>
  );
}
