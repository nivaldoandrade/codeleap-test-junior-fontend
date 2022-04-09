import { formatDistanceToNowStrict } from 'date-fns';
import { useQuery } from 'react-query';
import api from '../services/api';
import { PostProps } from '../types/postTypes';

interface ResponseProps {
  results: PostProps[];
  count: number;
}

const limit = 10;

export async function getPosts(page: number) {
  const offset = (page - 1) * limit;
  const response = await api.get<ResponseProps>('careers/', {
    params: {
      limit,
      offset,
    },
  });

  const PostsFormatted = response.data.results.map(post => ({
    ...post,
    createdFormatted: `${formatDistanceToNowStrict(
      new Date(post.created_datetime),
    )} ago`,
  }));

  return {
    posts: PostsFormatted,
    totalPosts: response.data.count,
    totalPerPage: limit,
  };
}

export function usePosts(page: number) {
  return useQuery(`posts ${page}`, () => getPosts(page), {
    staleTime: 1000 * 5, // 5 seconds
  });
}
