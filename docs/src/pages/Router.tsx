import React from 'react';
import LinkNext from 'next/link';

import Head from 'next/head';

import { isEnvironment, random } from '@amaui/utils';

import { Avatar, Line, Link, List, ListItem, ListSubheader, NavigationDrawer, SpeedDial, SpeedDialItem, Surface, Switch, Tooltip, Type, useMediaQuery } from '@amaui/ui-react';
import { classNames, colors, style as styleMethod, useAmauiTheme } from '@amaui/style-react';
import AmauiStorage from '@amaui/storage';

import IconMaterialTempPreferencesCustomRounded from '@amaui/icons-material-rounded-react/IconMaterialTempPreferencesCustom';
import IconMaterialLightModeRounded from '@amaui/icons-material-rounded-react/IconMaterialLightMode';
import IconMaterialDarkModeRounded from '@amaui/icons-material-rounded-react/IconMaterialDarkMode';
import IconMaterialFormatTextdirectionLToRRounded from '@amaui/icons-material-rounded-react/IconMaterialFormatTextdirectionLToR';
import IconMaterialFormatTextdirectionRToLRounded from '@amaui/icons-material-rounded-react/IconMaterialFormatTextdirectionRToL';

import sidenavJSON from '../assets/json/sidenav.json';

import Home from '../components/pages/Home';
import Library from '../components/pages/Library';

import { images, themeImageSub, newImagesSub, imageDownload } from '../utils';
import { useRouter } from 'next/router';
import { Header } from '../components/ui';

const useStyle = styleMethod(theme => ({
  '@p': {
    '::-webkit-scrollbar': {
      width: 16,
      height: 16
    },

    '::-webkit-scrollbar-track, ::-webkit-scrollbar-corner': {
      background: 'transparent'
    },

    '::-webkit-scrollbar-thumb': {
      borderRadius: 8,
      border: '4px solid transparent',
      backgroundClip: 'content-box',
      backgroundColor: 'rgba(221, 221, 221, 0.4)',

      '&:hover': {
        backgroundColor: 'rgba(221, 221, 221, 0.7)'
      }
    },

    body: {
      fontFamily: theme.typography.font_family.secondary,
      color: theme.palette.text.default.primary,
      backgroundColor: theme.palette.light ? theme.palette.color.primary[99] : theme.palette.color.primary[5]
    }
  },

  root: {
    minHeight: '100vh',
    background: 'transparent'
  },

  wrapper: {
    width: '100%'
  },

  wrapper_library: {
    width: `calc(100vw - 274px)`,
    marginInlineStart: '274px',
    transition: theme.methods.transitions.make('margin')
  },

  title: {
    cursor: 'pointer'
  },

  navigationDrawer: {
    paddingBottom: 100,

    '& .amaui-Modal-surface': {
      overflowY: 'scroll',
      scrollbarWidth: 0
    },

    '& .amaui-ListItem-end-button': {
      pointerEvents: 'none'
    },

    '& .amaui-List-root': {
      gap: 4
    }
  },

  navigationDrawer_desktop: {
    '&.amaui-Modal-root': {
      position: 'fixed !important',
      top: 0,
      insetInlineStart: 0,
      height: '100vh',
      width: 274,
      zIndex: 1
    }
  },

  navigationDrawer_mobile: {
    '&.amaui-Modal-root': {
      paddingBottom: 0,
      zIndex: theme.z_index.tooltip + 2
    }
  },

  main: {
    width: '100%',
    marginTop: '76px',
    flex: '1 1 auto',
    minHeight: 'calc(100vh - 305px)',

    '& > *': {
      display: 'flex',
      width: '100%',
      flex: '1 1 auto'
    }
  },

  footer: {
    width: '100%',
    padding: '60px 24px 24px',
    flex: '0 0 auto'
  },

  image_option: {
    transition: theme.methods.transitions.make(['box-shadow', 'transform'], { duration: 'sm' }),

    '&:focus-visible': {
      boxShadow: `0px 0px 0px 1px ${theme.palette.text.default.primary}`
    },

    '&:active': {
      transform: 'scale(0.91)'
    },

    '&.amaui-Avatar-root.amaui-Button-root': {
      cursor: 'pointer'
    }
  },

  image_option_selected: {
    boxShadow: `0px 0px 0px 1px ${theme.palette.text.default.primary}`
  },

  menuItem_menu: {
    '& > .amaui-ListItem-root .amaui-ListItem-text-primary': {
      fontWeight: '600'
    }
  },

  sideNavList: {
    overflow: 'auto',

    '& > * > *': {
      paddingInlineStart: '23px !important'
    },

    '& > * > .amaui-ListItem-root .amaui-ListItem-text': {
      fontSize: '0.925rem'
    },

    '&.amaui-Line-root': {
      width: '90vw',
      maxWidth: 274,
      paddingTop: 0,
      overflow: 'unset'
    },

    '&.amaui-Surface-root:not(.amaui-ListSubheader-root), & .amaui-Surface-root:not(.amaui-ListSubheader-root)': {
      background: 'transparent'
    }
  },

  sideNavListSubheader: {
    paddingTop: 32,
    marginBottom: 12,
    background: 'transparent !important',
    backdropFilter: 'blur(2px)'
  },

  [`@media only screen and (min-width: 1100px)`]: {
    $navigationDrawer: {
      '& .amaui-Modal-surface': {
        background: 'transparent'
      }
    }
  }
}), { name: 'root' });

const ListItemNext = (props: any) => {
  const {
    href,

    version,
    color,
    size,

    children,

    ...other
  } = props;

  return (
    <LinkNext
      href={href}
    >
      {React.cloneElement(children, {
        ...other
      })}
    </LinkNext>
  );
};

function Root(props: any) {
  const theme = useAmauiTheme();
  const router = useRouter();

  const { classes } = useStyle(props);

  const smallerScreen = useMediaQuery('(max-width: 1100px)');

  const light = useMediaQuery('(prefers-color-scheme: light)');

  const [init, setInit] = React.useState(false);
  const [newImages, setNewImages] = React.useState<any>(newImagesSub.value);
  const [open, setOpen] = React.useState(false);

  const refs = {
    storage: new AmauiStorage({ namespace: 'amaui-docs' }),
    imageSelected: React.useRef<any>(),
    images: React.useRef<any[]>([]),
    sidenavMenu: React.useRef<any>(),
    previousURL: React.useRef<string>(),
    props: React.useRef<any>()
  };

  const [imageSelected, setImageSelected] = React.useState('primary');

  refs.imageSelected.current = imageSelected;

  refs.images.current = [
    ...images,

    ...newImages.map((item: any, index: number) => ({
      id: item.id,
      label: `Random image ${index + 1}`,
      image: item.url,
      alt: ''
    }))
  ];

  const get = React.useCallback((value = refs.imageSelected.current) => refs.images.current.find(item => item.id === value), []);

  const updateImageSelected = (id: string) => {
    let value = id;

    if (!get(value)) value = 'primary';

    setImageSelected(value);

    themeImageSub.emit(value);
  };

  const getNewImages = React.useCallback(async () => {
    const values: number[] = [];
    const value = Array(4).fill(true).map(item => {
      let id = random(1, 1044);

      while (values.includes(id)) id = random(1, 1044);

      return {
        id,
        url: `https://picsum.photos/id/${id}/800/941`
      };
    });

    const valueUsable = [];

    for (const item of value) {
      const resolved = await imageDownload(item.url);

      if (resolved) valueUsable.push(item);
    }

    newImagesSub.emit(valueUsable as any);

    setNewImages(valueUsable);
  }, []);

  React.useEffect(() => {
    if (props.url !== undefined) refs.previousURL.current = props.url;
  }, [props.url]);

  const sidenavMenu: any = React.useMemo(() => {
    const url = props.url !== undefined ? props.url : refs.previousURL.current;

    const menu = sidenavJSON.find(item => url?.replace(/#.*/, '').indexOf(item.url) === 0);

    // if (menu?.menu) {
    //   const use = (menu as any).menu?.find((item: any) => item.label.toLowerCase() === 'use');

    //   if (use?.menu) use.menu.sort((a: any, b: any) => a.label.localeCompare(b.label));
    // }

    return menu || [];
  }, [props.url]);

  refs.sidenavMenu.current = sidenavMenu;

  refs.props.current = props;

  const resolveOpenList = () => {
    const url = refs.props.current.url !== undefined ? refs.props.current.url : refs.previousURL.current;

    const item = refs.sidenavMenu.current?.menu?.find((itemMenu: any) => url.indexOf(itemMenu?.url) === 0 || !!itemMenu?.menu?.find((itemMenuItem: any) => url.indexOf(itemMenuItem?.url) === 0));

    return item?.label;
  };

  const [openList, setOpenList] = React.useState(resolveOpenList);

  const initiate = React.useCallback(async () => {
    const imageSelected_ = refs.storage.get('image-selected');

    update('image', imageSelected_);

    setInit(true);

    if (!newImagesSub.value?.length) await getNewImages();
  }, []);

  React.useEffect(() => {
    if (window.matchMedia?.('(prefers-color-scheme: dark)')?.matches && !theme.inited) update('light', false);

    initiate();

    const direction = refs.storage.get('direction');

    if (direction !== null) update('direction', direction);

    const imageSub = themeImageSub.subscribe((value: string) => {
      if (value !== refs.imageSelected.current) setImageSelected(value);
    });

    // Clean up
    const elements = window.document.querySelectorAll('#amaui-initial-css');

    elements.forEach(element => element.remove());

    // Service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => console.log('Service worker registered: ', registration))
        .catch(error => console.log('Service worker registration failed: ', error));
    }

    return () => {
      imageSub.unsubscribe();
    };
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (init) update('light', light);
  }, [light]);

  React.useEffect(() => {
    setOpenList(resolveOpenList());
  }, [props.url]);

  const to = React.useCallback((url: string) => router.push(url), []);

  const update = async (version = 'light', value: any = true) => {
    let values_ = {};

    let imageToUse;

    switch (version) {
      case 'light':
        theme.updateWithRerender({
          palette: {
            light: value
          }
        });

        refs.storage.add('light', value);

        theme.inited = true;

        break;

      case 'direction':
        window.document.body.dir = value ? 'ltr' : 'rtl';

        theme.updateWithRerender({
          direction: value ? 'ltr' : 'rtl'
        });

        refs.storage.add('direction', value);

        break;

      case 'image':
        switch (value) {
          case 'primary':
            values_ = {
              palette: {
                color: {
                  primary: {
                    light: colors.yellow[300],
                    main: colors.yellow[500],
                    dark: colors.yellow[700],
                  },
                  secondary: {
                    light: colors.lightgreen[300],
                    main: colors.lightgreen[500],
                    dark: colors.lightgreen[700],
                  },
                  tertiary: {
                    light: colors.amber[300],
                    main: colors.amber[500],
                    dark: colors.amber[700],
                  },
                  quaternary: {
                    light: colors.cyan[300],
                    main: colors.cyan[500],
                    dark: colors.cyan[700],
                  }
                }
              }
            };

            imageToUse = { id: value };

            break;

          default:
            imageToUse = refs.images.current!.find(item => item.id === value);

            if (imageToUse) await theme.image(imageToUse?.image, {}, { allowCrossOrigin: true });

            break;
        }

        theme.updateWithRerender(values_);

        updateImageSelected(imageToUse?.id);

        refs.storage.add('image-selected', imageToUse?.id);

        break;

      default:
        break;
    }
  };

  const propsURL = props.url !== undefined ? props.url : refs.previousURL.current;

  const isLibrary = propsURL?.indexOf('/library/') === 0;

  const Page = !isLibrary ? Home : Library;

  const withNavigationDrawer = isLibrary && !smallerScreen;

  const NavigationDrawerProps: any = {};

  if (isLibrary && smallerScreen) {
    NavigationDrawerProps.color = 'primary';
    NavigationDrawerProps.tonal = true;
  }

  const toggleList = React.useCallback((name: string) => {
    setOpenList(name === openList ? '' : name);
  }, [openList]);

  const menuItems = React.useCallback((menu: any) => {
    return (menu || []).map((item: any, index: number) => {
      const isUrl = item.url && !item.menu;

      const ListItemComponent = isUrl ? ListItemNext : React.Fragment;
      const ListItemComponentProps: any = {};

      if (isUrl) {
        ListItemComponentProps.key = index;
        ListItemComponentProps.href = item.url;
        ListItemComponentProps.onClick = () => setOpen(false);
      }

      return (
        <ListItemComponent
          {...ListItemComponentProps}
        >
          <ListItem
            key={index}

            primary={item.label}

            tonal

            color='inherit'

            colorSelected='primary'

            size='small'

            list={item.menu && menuItems(item.menu)}

            shapePosition='end'

            paddingHorizontal='start'

            selected={!item.menu ? item.url === (isEnvironment('browser') && window.location.pathname) : false}

            button

            ListProps={{
              tonal: true,
              color: 'primary',
              shapePosition: 'both'
            }}

            WrapperProps={{
              version: 'text'
            }}

            {...(item.menu ? {
              onClick: () => {
                toggleList(item.label);
              },

              openList: item.label === openList,

              openListDefault: item.label === openList
            } : undefined)}

            className={classNames([
              item.menu && classes.menuItem_menu
            ])}
          />
        </ListItemComponent>
      );
    });
  }, [openList, toggleList, NavigationDrawerProps]);

  const img = get();

  return <>
    <Head>
      <title>amaui</title>

      <meta property='description' content='Make Modern Web &amp; Mobile Apps Quickly 100+ UI elements' />

      <meta property='og:description' content='Make Modern Web &amp; Mobile Apps Quickly 100+ UI elements' />

      {theme.palette.light ? <>
        <link rel='manifest' href='/assets/favicon/light/site.webmanifest' />
        <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicon/light/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicon/light/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicon/light/favicon-16x16.png' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <link rel='mask-icon' href='/assets/favicon/light/safari-pinned-tab.svg' color={theme.palette.color.primary[80]} />
        <meta name='apple-mobile-web-app-status-bar-style' content={theme.palette.color.primary[80]} />
        <meta name='theme-color' content={theme.palette.color.primary[80]} />
      </> :
        <>
          <link rel='manifest' href='/assets/favicon/dark/site.webmanifest' />
          <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicon/dark/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicon/dark/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicon/dark/favicon-16x16.png' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <link rel='mask-icon' href='/assets/favicon/light/safari-pinned-tab.svg' color={theme.palette.color.primary[20]} />
          <meta name='apple-mobile-web-app-status-bar-style' content={theme.palette.color.primary[20]} />
          <meta name='theme-color' content={theme.palette.color.primary[20]} />
        </>}
    </Head>

    <Surface
      tonal

      color='primary'

      gap={0}

      direction='row'

      Component={Line}

      className={classNames([
        classes.root
      ])}
    >
      {!!isLibrary && (
        <NavigationDrawer
          open={!init ? false : smallerScreen ? open : true}

          openDefault={false}

          version={(!init || smallerScreen) ? 'modal' : 'standard'}

          onClose={() => setOpen(false)}

          tonal={false}

          color='default'

          {...NavigationDrawerProps}

          className={classNames([
            classes.navigationDrawer,
            (init && smallerScreen) ? classes.navigationDrawer_mobile : classes.navigationDrawer_desktop
          ])}
        >
          <List
            tonal

            color='primary'

            paddingHorizontal='end'

            {...NavigationDrawerProps}

            className={classNames([
              classes.sideNavList
            ])}
          >
            <ListSubheader
              size='small'

              tonal

              color='primary'

              paddingHorizontal='both'

              Component={Surface}

              className={classNames([
                classes.sideNavListSubheader
              ])}
            >
              <Line
                gap={0.5}
              >
                <Type
                  version='b2'

                  color='inherit'

                  priority='secondary'
                >
                  Page
                </Type>

                <Type
                  version='t1'

                  className={classes.title}

                  onClick={() => to(sidenavMenu.url)}
                >
                  {sidenavMenu.label || 'No page'}
                </Type>
              </Line>
            </ListSubheader>

            {menuItems(sidenavMenu.menu)}
          </List>
        </NavigationDrawer>
      )}

      <Line
        gap={0}

        direction='column'

        className={classNames([
          classes.wrapper,
          init && isLibrary && !smallerScreen && classes.wrapper_library
        ])}
      >
        {/* Header */}
        <Header
          init={init}
          setOpen={setOpen}

          {...props}
        />

        {/* Main */}
        <Line
          Component='main'

          className={classNames([
            classes.main
          ])}
        >
          <Page {...sidenavMenu} {...props} />
        </Line>

        {/* Footer */}
        <Line
          align='center'

          Component='footer'

          className={classNames([
            classes.footer
          ])}
        >
          <Line
            gap={1}

            direction='row'

            align='center'

            justify='center'

            wrap='wrap'

            style={{
              marginBottom: 24
            }}
          >
            <Line
              gap={0.5}

              direction='row'

              align='center'

              justify='center'
            >
              <Type
                version='m3'
              >
                100% Open source,
              </Type>

              <Link
                version='m3'

                href='https://github.com/amaui-org/amaui/blob/main/LICENSE'

                target='_blank'

                color={theme.palette.color.secondary[50] as any}
              >
                MIT license
              </Link>
            </Line>

            <Type>·</Type>

            <Type
              version='m3'
            >
              Modern code
            </Type>

            <Type>·</Type>

            <Type
              version='m3'
            >
              Alpha version
            </Type>

            <Type>·</Type>

            <Type
              version='m3'
            >
              Browser & Nodejs
            </Type>
          </Line>

          <Type
            version='b3'

            priority='secondary'

            style={{
              textAlign: 'center'
            }}
          >
            Disclaimer: This is an independent open source project, and is not in any way affiliated with Alphabet Inc., Google Inc. or any of their projects.
          </Type>

          <Type
            version='b3'
          >
            Copyright © 2022 Lazar Erić
          </Type>

          <Line
            gap={0.5}

            direction='row'
          >
            <Type
              version='b3'

              priority='secondary'
            >
              Made with
            </Type>

            <Type
              version='b3'
            >
              💛
            </Type>
          </Line>
        </Line>
      </Line>

      {/* SpeedDial */}
      <SpeedDial
        direction='top'

        position='bottom'

        alignment='end'

        Icon={IconMaterialTempPreferencesCustomRounded}
      >
        <SpeedDialItem
          render={({ onBlur, onFocus, TooltipProps, ...otherItem }: any) => (
            <Tooltip
              label={theme.palette.light ? 'Light theme' : 'Dark theme'}

              portal={false}

              nowrap

              {...TooltipProps}
            >
              <Switch
                {...otherItem}

                onBlur={onBlur}

                onFocus={onFocus}

                color='primary'

                OnIcon={<IconMaterialLightModeRounded />}

                OffIcon={<IconMaterialDarkModeRounded />}

                checked={theme.palette.light}

                onChange={(value: boolean) => update('light', value)}
              />
            </Tooltip>
          )}
        />

        <SpeedDialItem
          render={({ onBlur, onFocus, TooltipProps, ...otherItem }: any) => (
            <Tooltip
              label={theme.direction === 'ltr' ? 'Left to right' : 'Right to left'}

              portal={false}

              nowrap

              {...TooltipProps}
            >
              <Switch
                {...otherItem}

                version='text'

                onBlur={onBlur}

                onFocus={onFocus}

                color='primary'

                OnIcon={<IconMaterialFormatTextdirectionLToRRounded />}

                OffIcon={<IconMaterialFormatTextdirectionRToLRounded />}

                checked={theme.direction === 'ltr'}

                onChange={(value: boolean) => update('direction', value)}
              />
            </Tooltip>
          )}
        />

        {[...refs.images.current].map((item: any, index: number) => (
          <SpeedDialItem
            key={index}

            render={({ onBlur, onFocus, TooltipProps, ...otherItem }: any) => (
              <Tooltip
                label={item.label}

                portal={false}

                nowrap

                {...TooltipProps}
              >
                <Avatar
                  {...otherItem}

                  tonal={false}

                  {...(item.color ? {
                    color: item.color
                  } : {
                    image: item.image,

                    alt: item.alt
                  })}

                  onBlur={onBlur}

                  onFocus={onFocus}

                  onClick={() => update('image', item.id)}

                  className={classNames([
                    otherItem?.className,
                    classes.image_option,
                    (img?.id === item.id) && classes.image_option_selected
                  ])}
                />
              </Tooltip>
            )}
          />
        ))}
      </SpeedDial>
    </Surface>
  </>;
}

export default Root;
