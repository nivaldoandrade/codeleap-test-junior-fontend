import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import api from '../../../services/api';

import { Input } from '../../Input';
import { Modal } from '..';
import { TextArea } from '../../TextArea';
import { ButtonComp } from '../../Button';
import { queryClient } from '../../../App';

import { EditPostRequest, ModalEditPostProps } from '../../../types/postTypes';

import { Form } from './styles';

export function ModalEditPost({
  isOpen,
  setIsOpen,
  editingPost,
  page,
}: ModalEditPostProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    setTitle(editingPost.title);
    setContent(editingPost.content);
  }, [editingPost]);

  const updatePost = useMutation(
    async (editPost: EditPostRequest) => {
      const response = await api.patch(`careers/${editPost.id}/`, {
        title: editPost.title.trim(),
        content: editPost.content.trim(),
      });

      return response.data.results;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(`posts ${page}`);
      },
    },
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!title && !content) {
        return;
      }

      const editPost = {
        id: editingPost.id,
        title,
        content,
      };

      await updatePost.mutateAsync(editPost);
      setIsOpen();
    },
    [title, content, editingPost, updatePost, setIsOpen],
  );

  return (
    <Modal type="edit" isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Edit Item</h1>
        <Input
          type="text"
          placeholder="Jonh doe"
          label="Title"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextArea
          label="Content"
          placeholder="Content here"
          id="content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <ButtonComp type="submit" disabled={!(title && content)}>
          save
        </ButtonComp>
      </Form>
    </Modal>
  );
}
