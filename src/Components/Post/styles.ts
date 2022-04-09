import styled from 'styled-components';

export const Post = styled.article`
  border: 1px solid var(--gray-400);
`;

export const PostHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
  min-height: 4.37rem;
  padding: 1.87rem;
  background-color: var(--black);

  h1 {
    flex: 1;
    font-size: 1.37rem;
    font-weight: 700;
    color: var(--white);
    word-break: break-all;
  }

  div {
    margin-left: auto;

    svg {
      width: 1.87rem;
      height: 1.87rem;
      color: var(--white);
      cursor: pointer;

      & + svg {
        margin-left: 1.43rem;
      }
    }
  }
`;

export const PostMain = styled.main`
  padding: 1.43rem 1.87rem;
`;

export const PostInfo = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.12rem;

  font-size: 1.12rem;
  font-weight: normal;
  color: var(--grat-600);
`;

export const PostContent = styled.p`
  font-size: 1.12rem;
  line-height: 1.31rem;

  white-space: pre-wrap;
  word-break: break-all;
`;
