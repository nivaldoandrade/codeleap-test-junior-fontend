import styled from 'styled-components';
import { grayscale } from 'polished';

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
`;

export const Content = styled.div`
  width: 550px;
  padding: 1.75rem 2rem;
  background-color: var(--white);
  border: 1px solid var(--gray-200);

  input {
    margin: 0.81rem 0 1.68rem;
  }

  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 1.37rem;
  font-weight: 700;

  margin-bottom: 1.87rem;
`;

export const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  align-self: flex-end;
  height: 2.06rem;
  padding: 0 1.87rem;
  background-color: var(--black);
  border: 0;

  color: var(--white);
  text-transform: uppercase;

  &:disabled {
    cursor: not-allowed;
    background-color: ${grayscale('#999')};
  }

  @media (max-width: 425px) {
    align-self: center;
  }
`;
