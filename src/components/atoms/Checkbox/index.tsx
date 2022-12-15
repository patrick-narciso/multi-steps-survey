import { Checkbox as ChackraCheckbox } from '@chakra-ui/react';

type ChackraProps = React.ComponentProps<typeof ChackraCheckbox>;

function Checkbox({ onChange, value, children, ...rest }: ChackraProps) {
  return (
    <ChackraCheckbox onChange={onChange} value={value} {...rest}>
      {children}
    </ChackraCheckbox>
  );
}

export default Checkbox;
