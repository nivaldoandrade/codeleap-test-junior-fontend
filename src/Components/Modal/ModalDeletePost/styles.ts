import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 1.37rem;
    margin-bottom: 3.12rem;
    font-weight: normal;
  }

  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  button {
    width: 111px;
    height: 2.06rem;
    background-color: transparent;
    border: 1px solid var(--black);

    font-weight: 700;

    transition: all 200ms ease-in-out;

    &:hover {
      background-color: var(--black);
      color: var(--white);
    }
  }

  @media (max-width: 425px) {
    justify-content: center;
  }
`;
