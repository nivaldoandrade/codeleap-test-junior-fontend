import styled from 'styled-components';

export const Container = styled.section``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 2.37rem;
  height: 5rem;
  background-color: var(--black);

  color: var(--white);

  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

export const Main = styled.main`
  background-color: var(--white);
  padding: 2.75rem 2.37rem;

  @media (max-width: 425px) {
    padding: 2.75rem 0.5rem;
  }
`;

export const FormContent = styled.div`
  border: 1px solid var(--gray-400);
  padding: 1.43rem 1.87rem;
  margin-bottom: 2.12rem;

  h1 {
    font-size: 1.37rem;
    font-weight: 700;
    padding-bottom: 2.12rem;
  }
`;
