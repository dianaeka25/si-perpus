import React from 'react';
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-sky-500 w-full h-16 shadow-lg">
        <Link href="/">
        <h1 className="text-center text-2xl text-white font-semiblod pt-3">
            SI  PERPUSTAKAAN
        </h1>
        </Link>
    </div>
  );
};

export default Header;