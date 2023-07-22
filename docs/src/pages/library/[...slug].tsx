import { GetServerSidePropsContext } from 'next';

import { is } from '@amaui/utils';
import AmauiRequest from '@amaui/request';

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
  const props: any = {
    url: context.resolvedUrl.split('?')[0]
  };

  const urls: string[] = libraries.map(item => item.url);

  const method = (item: any) => {
    if (item.url !== undefined) urls.push(item.url);

    if (is('array', item.menu)) item.menu.forEach((route: any) => method(route));
  };

  sidenavJSON.forEach(item => method(item));

  if (!(urls.some((item: string) => props.url === item) || ['/dev', '/library/'].some(item => item === props.url))) return {
    redirect: {
      destination: '/',
      permanent: false
    }
  };

  // Default redirect
  const item: any = sidenavJSON.find(item_ => props.url?.indexOf(item_.url) === 0);

  if (item?.url === props.url) return {
    redirect: {
      destination: item?.default,
      permanent: false
    }
  };

  // page md
  try {
    const port = process.env.PORT || 3000;

    const response = (await AmauiRequest.get(`http://localhost:${port}/assets/md${props.url}.md`, { response: { type: 'text' } }));

    if (response.status === 200) props.value = response.response;
  } catch (error) { }

  return {
    props
  };
}
