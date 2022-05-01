import { NextSeo } from 'next-seo';

const Page = ({ name, path, children }) => {
  const title = `Fast Feedback – ${name}`;
  const url = `${process.env.NEXT_PUBLIC_PRODUCTION_SITE_URL}${path}`;

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
