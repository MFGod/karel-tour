import { FC, ComponentProps, ComponentPropsWithoutRef, ReactNode } from 'react';
import styled from 'styled-components';

import { Styles } from './styles';



export enum EParagraphVariant {
  Medium = 'medium',
  Small = 'small',
}

interface IStyledProps {
  variant: EParagraphVariant;
}

type TParagraphProps = ComponentProps<typeof Wrapper> &
  ComponentPropsWithoutRef<'p'>;

interface IComponentProps extends TParagraphProps {
  variant: EParagraphVariant;
  children: ReactNode;
}

const Wrapper = styled.p<IStyledProps>`
  ${({ variant }) => {
    switch (variant) {
      case EParagraphVariant.Medium:
        return Styles.Medium;

      case EParagraphVariant.Small:
        return Styles.Small;
    }
  }};
`;

export const Paragraph: FC<IComponentProps> = (props) => <Wrapper {...props} />;