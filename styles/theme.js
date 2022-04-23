import { extendTheme } from '@chakra-ui/react';

const fontWeights = {
  normal: 400,
  medium: 600,
  bold: 700
};

const fonts = {
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
};

export const customTheme = extendTheme({ fontWeights, fonts });
