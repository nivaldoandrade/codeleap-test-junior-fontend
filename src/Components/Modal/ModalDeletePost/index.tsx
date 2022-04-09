import { useMutation } from 'react-query';
import { useCallback } from 'react';
import { queryClient } from '../../../App';

import api from '../../../services/api';

import { Modal } from '..';

import { ModalDeletePostProps } from '../../../types/postTypes';

import { Container, ButtonContent } from './styles';

export function ModalDeletePost({
  isOpen,
  setIsOpen,
  deletingPost: id,
  page,
}: ModalDeletePostProps) {
  const deletePost = useMutation(
    async () => {
      await api.delete(`careers/${id}/`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(`posts ${page}`);
      },
    },
  );

  const handleDeletePost = useCallback(async () => {
    await deletePost.mutateAsync();
    setIsOpen();
  }, [deletePost, setIsOpen]);

  return (
    <Modal type="delete" isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <h1>Are you sure you want to delete this item?</h1>
        <ButtonContent>
          <button type="button" onClick={() => setIsOpen()}>
            cancel
          </button>
          <button type="button" onClick={handleDeletePost}>
            ok
          </button>
        </ButtonContent>
      </Container>
    </Modal>
  );
}
