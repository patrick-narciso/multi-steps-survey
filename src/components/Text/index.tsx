import { Text as ChackraText } from '@chakra-ui/react';

type ChackraProps = React.ComponentProps<typeof ChackraText>;

function Text({ children, ...rest }: ChackraProps) {
  return <ChackraText {...rest}>{children}</ChackraText>;
}

export default Text;
