import { useState } from 'react';

import { usePosts } from '../../hooks/usePosts';

import { PostComp } from '../Post';
import { Pagination } from '../Pagination';
import { ModalEditPost } from '../Modal/ModalEditPost';
import { ModalDeletePost } from '../Modal/ModalDeletePost';
import { SpinnerComp } from '../Spinner';

import { PostProps } from '../../types/postTypes';

import { PostsList, PaginationContainer } from './styles';

export function PostsListComp() {
  const [page, setPage] = useState(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState({} as PostProps);
  const [deletePost, setDeletePost] = useState<number>();

  const { data, isLoading } = usePosts(page);

  function toggleEditModal() {
    setIsModalOpen(state => !state);
  }

  function toggleDeleteModal() {
    setIsDeleteModalOpen(state => !state);
  }

  function handleEditPost(post: PostProps) {
    setEditingPost(post);
    toggleEditModal();
  }

  function handleDeletePost(id: number) {
    setDeletePost(id);
    toggleDeleteModal();
  }

  if (isLoading) {
    return <SpinnerComp />;
  }

  return (
    <PostsList>
      {data?.posts.map(post => (
        <PostComp
          key={post.id}
          post={post}
          handleEditPost={handleEditPost}
          handleDeletePost={handleDeletePost}
        />
      ))}
      <PaginationContainer>
        <Pagination
          page={page}
          setPage={setPage}
          totalPosts={data?.totalPosts}
          totalPerPage={data?.totalPerPage}
        />
      </PaginationContainer>
      <ModalEditPost
        isOpen={isModalOpen}
        setIsOpen={toggleEditModal}
        editingPost={editingPost}
        page={page}
      />
      <ModalDeletePost
        isOpen={isDeleteModalOpen}
        setIsOpen={toggleDeleteModal}
        deletingPost={deletePost}
        page={page}
      />
    </PostsList>
  );
}
