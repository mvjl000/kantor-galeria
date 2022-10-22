import type { NextPage } from 'next';
import Link from 'next/link';
import { H1 } from '../components/ui';

const Admin: NextPage = () => {
  return (
    <div>
      <H1>Admin Panel</H1>
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
    </div>
  );
};

export default Admin;
