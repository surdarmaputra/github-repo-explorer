import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Text, TextProps } from '@mantine/core';

const hide = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const FlashedText = styled(Text)<TextProps>`
  animation: ${hide} 3s forwards;
`;

export default FlashedText;
