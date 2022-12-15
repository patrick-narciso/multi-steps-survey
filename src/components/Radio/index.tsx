import { Radio as ChackraRadio } from '@chakra-ui/react';

type ChackraProps = React.ComponentProps<typeof ChackraRadio>;

function Radio({ onChange, value, children, ...rest }: ChackraProps) {
  return (
    <ChackraRadio onChange={onChange} value={value} {...rest}>
      {children}
    </ChackraRadio>
  );
}

export default Radio;
