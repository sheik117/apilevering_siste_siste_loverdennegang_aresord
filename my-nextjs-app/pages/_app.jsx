import App from 'next/app';
import { useState, useEffect } from 'react';

const MyApp = ({ Component, pageProps }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/list');
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <Component {...pageProps} data={data} />
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
