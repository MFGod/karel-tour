import { forwardRef } from 'react';
import styled, { StyledComponentPropsWithRef } from 'styled-components';

import { Styles } from './styles';

export enum EHeadlineVariant {
  First = 'First',
  Second = 'Second',
}

export interface IHeadlineProps extends StyledComponentPropsWithRef<'h1'> {
  variant: EHeadlineVariant;
  as: keyof JSX.IntrinsicElements;
}

const Wrapper = forwardRef<HTMLHeadingElement, IHeadlineProps>((props, ref) => (
  <h1 ref={ref} {...props} />
));

export const Headline = styled(Wrapper)<IHeadlineProps>`
  ${({ variant }) => {
    if (variant in EHeadlineVariant) {
      return Styles[variant];
    } else {
      throw new Error('"variant" prop must be one of the `EHeadlineVariant`');
    }
  }};
`;
