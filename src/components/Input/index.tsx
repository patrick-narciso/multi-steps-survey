import { Input as ChackraInput } from '@chakra-ui/react';

type ChackraProps = React.ComponentProps<typeof ChackraInput>;

function Input({ onChange, value, children, ...rest }: ChackraProps) {
  return <ChackraInput onChange={onChange} value={value} {...rest} />;
}

export default Input;
