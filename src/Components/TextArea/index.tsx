import { TextAreaGroup, TextAreaLabel, TextAreaField } from './styles';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
  placeholder: string;
}

export function TextArea({ id, label, placeholder, ...rest }: TextAreaProps) {
  return (
    <TextAreaGroup>
      {label && <TextAreaLabel htmlFor={id}>{label}</TextAreaLabel>}
      <TextAreaField id={id} {...rest} placeholder={placeholder} />
    </TextAreaGroup>
  );
}
