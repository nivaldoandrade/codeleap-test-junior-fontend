import { Button } from './styles';

interface ButtonCompProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ButtonComp({ children, ...rest }: ButtonCompProps) {
  return <Button {...rest}>{children}</Button>;
}
