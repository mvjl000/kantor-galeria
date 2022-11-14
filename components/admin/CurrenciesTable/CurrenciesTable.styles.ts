import styled from '@emotion/styled';

export const TableWrapper = styled.section`
  margin: 30px auto 20px;
  width: 90%;
  max-width: 1000px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 3px;
  border-collapse: collapse;

  thead tr th {
    font-size: ${({ theme }) => theme.font.size.small};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    text-align: center;
    padding: 10px 0;
  }

  tbody {
    border-top: 1px solid black;
  }

  tbody tr {
    background-color: ${({ theme }) => theme.colors.white};
  }

  tbody tr td {
    height: 50px;
    font-size: ${({ theme }) => theme.font.size.xSmall};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    text-align: center;
    border: 1px solid black;

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.small};
    }
  }

  tbody tr td.flag-cell > button {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    padding: 0 12px;
    gap: 10px;
    cursor: pointer;
    transition: 0.15s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGrey};
    }
  }

  tbody tr td input {
    width: 100%;
    height: 100%;
    border: none;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.xSmall};
    font-weight: ${({ theme }) => theme.font.weight.medium};

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.small};
    }
  }

  tbody tr td.delete-td > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
