import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'gray.600',
        color: 'white',
        lineHeight: 'tall',
      },
      a: {
        color: 'teal.500',
      },
    },
  },
});
