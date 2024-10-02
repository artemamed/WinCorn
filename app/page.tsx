import Head from 'next/head';
import Header from '@/components/Header';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>WinCorn</title>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css" rel="stylesheet" />
      </Head>
      <Header />
    </>
  );
}
