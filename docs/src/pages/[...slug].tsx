import { GetServerSidePropsContext } from 'next';

import Router from './Router';

import { libraries } from '../utils';

export default function (props: any) {

  return (
    <Router
      {...props}
    />
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const url = context.resolvedUrl.split('?')[0];

  if (!(libraries.some(item => url.indexOf(item.url) === 0) || ['', '/'].some(item => item === url))) return {
    redirect: {
      destination: '/',
      permanent: false,
    }
  };

  return {
    props: {
      url: context.resolvedUrl
    }
  };
}
