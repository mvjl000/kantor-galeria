import Modal from 'react-modal';
import styled from '@emotion/styled';

export const StyledModal = styled(Modal)`
  width: 90vw;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 0;
  background-color: #fff;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  outline: none;
  border-radius: 10px;

  ${({ theme }) => theme.mq.desktop} {
    width: 80vw;
    max-width: 1200px;
  }
`;
