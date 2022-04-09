import { grayscale } from 'polished';
import styled from 'styled-components';

export const NextPreviuosContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  form {
    input {
      width: 3rem;
      height: 2rem;
      text-align: center;
    }
  }

  button {
    height: 2rem;
    padding: 0 0.5rem;
    background-color: var(--black);
    color: var(--white);

    transition: all 200ms ease-in-out;

    &:hover:not():disabled {
      background-color: var(--white);
      color: var(--black);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${grayscale('#999')};
    }
  }
`;
