import { InputGroup, InputLabel, InputField } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  placeholder: string;
}

export function Input({ id, label, placeholder, ...rest }: InputProps) {
  return (
    <InputGroup>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}

      <InputField id={id} {...rest} placeholder={placeholder} />
    </InputGroup>
  );
}
