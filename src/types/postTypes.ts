export interface ModalDeletePostProps {
  isOpen: boolean;
  setIsOpen: () => void;
  deletingPost?: number;
  page: number;
}

export interface ModalEditPostProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingPost: PostProps;
  page: number;
}

export interface PostCompProps {
  post: PostProps;
  handleEditPost: (post: PostProps) => void;
  handleDeletePost: (id: number) => void;
}

export interface PostProps {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
  createdFormatted: string;
}

export type EditPostRequest = Omit<
  PostProps,
  'username' | 'createdFormatted' | 'created_datetime'
>;
