import styled from 'styled-components';

export const TextAreaGroup = styled.div``;

export const TextAreaLabel = styled.label`
  display: block;
  padding-bottom: 0.81rem;
`;

export const TextAreaField = styled.textarea`
  width: 100%;
  min-height: 4.62rem;
  padding: 0.37rem 0.68rem;
  border-radius: 4px;
  border: 1px solid var(--gray-500);
  resize: none;

  &::placeholder {
    font-size: 0.87rem;
    color: var(--gray-200);
  }
`;
