import { Heading as ChackraHeading } from '@chakra-ui/react';

type ChackraProps = React.ComponentProps<typeof ChackraHeading>;

function Heading({ children, ...rest }: ChackraProps) {
  return <ChackraHeading {...rest}>{children}</ChackraHeading>;
}

export default Heading;
