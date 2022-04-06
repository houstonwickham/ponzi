import { useState } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import Footer from './footer';
import 'animate.css';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
