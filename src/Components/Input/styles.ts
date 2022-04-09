import styled from 'styled-components';

export const InputGroup = styled.div``;

export const InputLabel = styled.label`
  display: block;
  padding-bottom: 13px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.37rem 0.68rem;
  border-radius: 4px;
  border: 1px solid var(--gray-500);

  &::placeholder {
    font-size: 0.87rem;
    color: var(--gray-200);
  }
`;
