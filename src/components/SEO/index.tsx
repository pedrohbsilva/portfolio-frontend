import Head from 'next/head';
import { ReactElement } from 'react';

import { SEOProps } from 'src/interfaces';

const SEO = ({ title, description }: SEOProps): ReactElement => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/vercel.svg" />
      <meta
        name="description"
        content={description || 'Software Developer | JavaScript | Python.'}
      />

      <meta
        property="og:site_name"
        content={process.env.NEXT_PUBLIC_SITE_NAME}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || 'Software Developer | JavaScript | Python.'}
      />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />

      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description || 'Software Developer | JavaScript | Python.'}
      />
      <meta name="twitter:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="640" />
    </Head>
  );
};

export default SEO;
