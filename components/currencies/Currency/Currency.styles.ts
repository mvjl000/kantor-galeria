import styled from '@emotion/styled';
import { flexLeft } from '../../../styles/mixins';

export const Wrapper = styled.div`
  ${flexLeft}
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const FlagWrapper = styled.div`
  height: 35px;
  width: 35px;
  background-color: #999;
`;
