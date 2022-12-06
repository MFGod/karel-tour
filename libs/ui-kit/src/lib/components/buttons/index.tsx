import { forwardRef, ReactNode } from 'react';
import styled, { StyledComponentPropsWithRef } from 'styled-components';

import { Styles } from './styles';

export enum EButtonVariant {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Third = 'Third',
  Disabled = 'Disabled',
}

export enum EButtonAppearance {
  Light = 'Light',
  Dark = 'Dark',
}

export interface IButtonProps extends StyledComponentPropsWithRef<'button'> {
  disabled?: boolean;
  variant: EButtonVariant;
  appearance?: EButtonAppearance;
  children: ReactNode;
}

const Wrapper = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => (
  <button ref={ref} {...props} />
));

export const Button = styled(Wrapper)<IButtonProps>`
  font-size: 15px;
  white-space: normal;
  text-transform: uppercase;

  border-width: 1px;
  border-style: solid;
  border-radius: 12px;

  cursor: pointer;
  transition: 0.3s ease-in-out;

  :hover {
    filter: opacity(0.7);
  }

  :active {
    filter: contrast(1.3);
  }

  ${({ variant }) => {
    if (variant in EButtonVariant) {
      return Styles[variant];
    } else {
      return null;
    }
  }}

  ${({ disabled }) => disabled && Styles.Disabled}
`;
