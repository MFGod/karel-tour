import { ComponentProps, FC } from 'react';
import styled from 'styled-components';

interface ICloseMenuProps extends ComponentProps<'svg'> {
  open: boolean;
}

export const CloseMenu: FC<ICloseMenuProps> = (props) => {
  return (
    <svg
      width="36px"
      height="36px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Menu / Close_LG">
        <path
          id="Vector"
          d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const StyledCloseMenu = styled(CloseMenu)`
  padding: 6px;
`;
