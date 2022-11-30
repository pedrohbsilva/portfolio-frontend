import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import Footer from 'src/components/footer';

import Header from 'src/components/header';

import { languages } from '../locales';
const Blog = (): ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';
  const { blog } = languages[myLocales];
  return (
    <>
      <Header pageName={blog} />
      <p>{blog}</p>
      <Footer />
    </>
  );
};

export default Blog;
