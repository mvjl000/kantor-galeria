import type { NextPage } from 'next';
import styled from '@emotion/styled';

const H1 = styled.h1`
  color: ${({ theme }) => theme.font.color.grey};
  font-size: ${({ theme }) => theme.font.size.large};
`;

const Home: NextPage = () => {
  return (
    <div>
      <H1>TESTING PRETTIER</H1>
    </div>
  );
};

export default Home;
