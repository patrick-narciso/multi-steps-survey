import { Select as ChackraSelect } from '@chakra-ui/react';
import React from 'react';

type ChackraSelectProps = React.ComponentProps<typeof ChackraSelect>;

interface SelectProps extends ChackraSelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

function Select({ onChange, value, ...rest }: SelectProps) {
  return <ChackraSelect onChange={onChange} value={value} {...rest} />;
}

export default Select;
