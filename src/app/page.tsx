'use client';

import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;
  width: 100%;
  background-image: url('/images/home.jpg');
  background-size: cover;
  background-position: center;
`;

const Headline = styled.h1`
  text-align: center;

  font-size: 98px;

  color: ${(props) => props.theme.text};
`;

const Text = styled.p`
  font-size: 48px;

  color: ${(props) => props.theme.text};
`;

const Home: FC = () => {
  return (
    <Wrapper>
      <Headline>
        Добро пожаловать
        <br /> в Карелию
      </Headline>
      <Text>
        Приглашаем в лучшее приключение в вашей жизни, мы создадим ваш отпуск!
      </Text>
    </Wrapper>
  );
};
export default Home;
