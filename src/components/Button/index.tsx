import { Button as ChackraButton } from '@chakra-ui/react';

type ChackraProps = React.ComponentProps<typeof ChackraButton>;

function Button({ onClick, children, ...rest }: ChackraProps) {
  return (
    <ChackraButton onClick={onClick} {...rest}>
      {children}
    </ChackraButton>
  );
}

export default Button;
