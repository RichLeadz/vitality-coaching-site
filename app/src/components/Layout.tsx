import { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-[100dvh] bg-[#0C0C0A] text-[#FFFFFF]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
