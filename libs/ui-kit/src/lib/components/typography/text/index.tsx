import { FC, ComponentProps, ComponentPropsWithoutRef, ReactNode } from 'react';
import styled from 'styled-components';
import { Styles } from './styles';

export enum ETextVariant {
  Medium = 'medium',
  Small = 'small',
}

interface IStyledProps {
  variant: ETextVariant;
}

type TTextProps = ComponentProps<typeof Wrapper> &
  ComponentPropsWithoutRef<'span'>;

interface IComponentProps extends TTextProps {
  variant: ETextVariant;
  children: ReactNode;
}

const Wrapper = styled.span<IStyledProps>`
  ${({ variant }) => {
    switch (variant) {
      case ETextVariant.Medium:
        return Styles.Medium;

      case ETextVariant.Small:
        return Styles.Small;
    }
  }}
`;

export const Text: FC<IComponentProps> = (props) => <Wrapper {...props} />;
