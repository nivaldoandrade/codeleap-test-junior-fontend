import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.37rem;
    font-weight: 700;
    margin-bottom: 2.12rem;
  }

  div + div {
    margin-top: 1.18rem;
  }

  button {
    align-self: flex-end;
    margin-top: 2.18rem;
  }

  @media (max-width: 425px) {
    h1 {
      text-align: center;
    }

    button {
      align-self: center;
    }
  }
`;
