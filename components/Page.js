import React from 'react';
import { NextSeo } from 'next-seo';

const Page = ({ children }) => {
  const path = window.location.pathname;
  const name = path.charAt(1).toUpperCase() + path.slice(2);
  const title = `Fast Feedback – ${name}`;
  const url = `https://react2025.cf${path}`;

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      {children}
    </>
  );
};

export default Page;
