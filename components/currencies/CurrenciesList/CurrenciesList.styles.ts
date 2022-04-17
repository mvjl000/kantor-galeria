import styled from '@emotion/styled';

export const Wrapper = styled.section`
  padding: 0 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (orientation: landscape) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15px;
  }
`;
