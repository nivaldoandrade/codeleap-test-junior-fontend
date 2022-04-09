import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  div + div {
    margin-top: 1.56rem;
  }

  button {
    align-self: flex-end;
    margin-top: 2.18rem;
  }

  @media (max-width: 425px) {
    button {
      align-self: center;
    }
  }
`;
