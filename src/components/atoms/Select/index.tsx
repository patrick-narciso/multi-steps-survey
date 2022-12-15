import { Select as ChackraSelect } from '@chakra-ui/react';
import React from 'react';

type ChackraSelectProps = React.ComponentProps<typeof ChackraSelect>;

interface SelectProps extends ChackraSelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

function Select({
  children,
  isDisabled,
  isInvalid,
  isReadOnly,
  isRequired,
  variant = 'outline',
  size,
  onChange,
  value,
}: SelectProps) {
  return (
    <ChackraSelect
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      size={size}
      variant={variant}
      onChange={onChange}
      value={value}
    >
      {children}
    </ChackraSelect>
  );
}

export default Select;
