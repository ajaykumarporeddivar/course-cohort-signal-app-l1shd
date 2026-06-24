'use client';

import { Layout } from './layout';

export function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}