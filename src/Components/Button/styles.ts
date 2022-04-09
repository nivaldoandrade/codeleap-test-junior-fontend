import styled from 'styled-components';
import { grayscale } from 'polished';

export const Button = styled.button`
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
`;
