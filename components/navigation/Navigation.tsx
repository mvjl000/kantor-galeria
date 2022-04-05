import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <h2>Navtigation</h2>
    </>
  );
};

export default Navigation;
