/* eslint-disable tailwindcss/no-custom-classname */
import React, { ReactElemnt } from 'react';
import Link from 'next/link';

const Index: React.VFC = (): ReactElemnt => {
  return (
    <div className="container mx-auto w-full h-screen bg-@006e54">
      <div className="flex justify-center items-center w-auto h-full">
        <Link href="/template">
          <a className="btn btn--orange btn--radius">クリック</a>
        </Link>
      </div>
      <style jsx>{``}</style>
    </div>
  );
};

export default Index;
