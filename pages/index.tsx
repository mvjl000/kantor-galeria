import type { NextPage } from 'next';
import styled from '@emotion/styled';

const H1 = styled.h1`
  color: ${({ theme }) => theme.fontColors.grey};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const Home: NextPage = () => {
  return (
    <div>
      <H1>Hello nextjs</H1>
    </div>
  );
};

export default Home;
