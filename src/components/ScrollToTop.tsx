import styled from '@emotion/styled';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';

interface StyledFloatingButtonProps {
  isVisible: boolean;
}

const StyledFloatingButton = styled.button<StyledFloatingButtonProps>`
  position: fixed;
  bottom: ${(props) => (props.isVisible ? '1rem' : '-50%')};
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  border: none;
  background: #343a40;
  color: white;
  cursor: pointer;
  padding: 0.35rem 0.5rem;
  transition: bottom 0.25s ease-in-out;
`;

export default function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();
  const isVisible = scroll.y > 120;

  return (
    <StyledFloatingButton
      isVisible={isVisible}
      onClick={() => scrollTo({ y: 0 })}
    >
      <IconArrowUp />
    </StyledFloatingButton>
  );
}
