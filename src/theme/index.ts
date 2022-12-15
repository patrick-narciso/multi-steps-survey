import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'gray.300',
        lineHeight: 'tall',
      },
      a: {
        color: 'teal.500',
      },
    },
  },
});
