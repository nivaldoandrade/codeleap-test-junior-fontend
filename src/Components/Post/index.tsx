import { Icon } from '@iconify/react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { UserProps, UserState } from '../../types/userTypes';
import { PostCompProps, PostProps } from '../../types/postTypes';

import { Post, PostHeader, PostMain, PostInfo, PostContent } from './styles';

export function PostComp({
  post,
  handleEditPost,
  handleDeletePost,
}: PostCompProps) {
  const user = useSelector<UserState, UserProps>(state => state.user);

  const isPostUser = useMemo(() => {
    return post.username === user.name;
  }, [post, user]);

  function setEditingPost(editPost: PostProps) {
    handleEditPost(editPost);
  }

  function setDeletingPost(id: number) {
    handleDeletePost(id);
  }

  return (
    <Post>
      <PostHeader>
        <h1>{post.title}</h1>
        <div>
          {isPostUser && (
            <>
              <Icon
                icon="ic:baseline-delete-forever"
                onClick={() => setDeletingPost(post.id)}
              />
              <Icon icon="bx:edit" onClick={() => setEditingPost(post)} />
            </>
          )}
        </div>
      </PostHeader>
      <PostMain>
        <PostInfo>
          <strong>{post.username}</strong>
          <span>{post.createdFormatted}</span>
        </PostInfo>
        <PostContent>{post.content}</PostContent>
      </PostMain>
    </Post>
  );
}
