import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Link from 'next/link';
import { H1, StyledTable } from '../components/ui';
import styled from '@emotion/styled';
import { FlagWrapper } from '../components/currencies/Currency/Currency.styles';
import axios from 'axios';
import { CurrencyType } from './types';

const TableWrapper = styled.div`
  margin: 30px auto;
  width: 90%;
  max-width: 1000px;
`;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const responseData = await axios.get(`${process.env.API_URL}/currency`);
    return {
      props: {
        currencies: responseData.data.currencies,
        error: false,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        currencies: [],
        error: true,
      },
    };
  }
};

const Admin: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  currencies,
  error,
}) => {
  if (error) {
    return <H1>Coś poszło nie tak, spróbuj ponownie później</H1>;
  }
  return (
    <>
      <H1>Panel Administratora</H1>
      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th scope="col">Nazwa</th>
              <th scope="col">Kupno</th>
              <th scope="col">Sprzedaż</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map((currency: CurrencyType) => (
              <tr key={currency._id}>
                <td className="flag-cell">
                  <div>
                    <FlagWrapper>
                      <img
                        alt={`flaga ${currency.name}`}
                        src={`${process.env.UPLOADS_URL}/${currency.image}`}
                      />
                    </FlagWrapper>
                    {currency.name}
                  </div>
                </td>
                <td>
                  <input value={currency.buy} />
                </td>
                <td>
                  <input value={currency.sell} />
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
      <Link href="/api/auth/logout" passHref={false}>
        <a
          style={{
            display: 'block',
            margin: '50px auto',
            width: '80px',
            height: '30px',
            fontSize: '22px',
            backgroundColor: '#ccc',
            textAlign: 'center',
          }}
        >
          logout
        </a>
      </Link>
    </>
  );
};

export default Admin;
