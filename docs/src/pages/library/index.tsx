import { GetServerSidePropsContext } from 'next';

import { is } from '@amaui/utils';

import sidenavJSON from '../../assets/json/sidenav.json';

import Router from '../Router';

import { libraries } from '../../utils';

export default function (props: any) {

  return (
    <Router
      {...props}
    />
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const url = context.resolvedUrl.split('?')[0];

  const urls: string[] = libraries.map(item => item.url);

  const method = (item: any) => {
    if (item.url !== undefined) urls.push(item.url);

    if (is('array', item.menu)) item.menu.forEach((route: any) => method(route));
  };

  sidenavJSON.forEach(item => method(item));

  if (!(urls.some((item: string) => url === item) || ['/dev', '/library/'].some(item => item === url))) return {
    redirect: {
      destination: '/',
      permanent: false
    }
  };

  // Default redirect
  const item: any = sidenavJSON.find(item_ => url.indexOf(item_.url) === 0);

  if (item?.url === url) return {
    redirect: {
      destination: item?.default,
      permanent: false
    }
  };

  return {
    props: {
      url: context.resolvedUrl
    }
  };
}
