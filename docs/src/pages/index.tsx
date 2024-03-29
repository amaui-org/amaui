import { GetServerSidePropsContext } from 'next';

import Router from './Router';

export default function (props: any) {

  return (
    <Router
      {...props}
    />
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

  return {
    props: {
      url: context.resolvedUrl
    }
  };
}
