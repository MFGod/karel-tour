import { css } from 'styled-components';

import { EButtonAppearance, IButtonProps } from '.';

const Primary = css`
  padding: 18px 20px;
  padding-bottom: 16px;

  color: ${({ appearance }: IButtonProps) => {
    const light = '#fff';

    switch (appearance) {
      case EButtonAppearance.Light:
        return light;

      case EButtonAppearance.Dark:
        return '#000000e5';

      default:
        return light;
    }
  }};

  border-color: transparent;
  background: ${({ appearance }: IButtonProps) => {
    const light = '#e97230';

    switch (appearance) {
      case EButtonAppearance.Light:
        return light;

      case EButtonAppearance.Dark:
        return '#fff';

      default:
        return light;
    }
  }};
`;

const Secondary = css`
  padding: 16px 18px;

  color: ${({ appearance }: IButtonProps) => {
    const light = '#000000e5';

    switch (appearance) {
      case EButtonAppearance.Light:
        return light;

      case EButtonAppearance.Dark:
        return '#fff';

      default:
        return light;
    }
  }};

  border-color: ${({ appearance }: IButtonProps) => {
    const light = '#000000e5';

    switch (appearance) {
      case EButtonAppearance.Light:
        return light;

      case EButtonAppearance.Dark:
        return '#ffffff3d';

      default:
        return light;
    }
  }};
  background: transparent;
`;

const Third = css`
  color: ${({ theme }) => theme.colors.primaryText};

  padding: 18px 20px;
  padding-bottom: 14px;

  border-color: #00000014;
  background: transparent;
`;

const Disabled = css`
  filter: opacity(0.3);

  cursor: not-allowed;

  :active,
  :hover {
    filter: opacity(0.3);
  }
`;

export const Styles = { Primary, Secondary, Third, Disabled };
