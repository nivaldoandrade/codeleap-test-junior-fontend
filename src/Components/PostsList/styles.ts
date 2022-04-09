import styled from 'styled-components';

export const PostsList = styled.div`
  article + article {
    margin-top: 44px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;

  @media (max-width: 425px) {
    justify-content: center;
  }
`;
