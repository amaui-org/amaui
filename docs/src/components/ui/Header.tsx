import React from 'react';
import LinkNext from 'next/link';

import { isEnvironment } from '@amaui/utils';

import { IconButton, List, MenuItem, MenuDesktop, Tooltip, TopAppBar, useMediaQuery, useScroll } from '@amaui/ui-react';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';
import AmauiStorage from '@amaui/storage';

import IconMaterialAutoAwesomeRounded from '@amaui/icons-material-rounded-react/IconMaterialAutoAwesome';
import IconMaterialMenuRounded from '@amaui/icons-material-rounded-react/IconMaterialMenu';

import Logo from '../../../public/assets/svg/logo.svg';
import IconGithub from '../../../public/assets/svg/github.svg';

import sidenavJSON from '../../assets/json/sidenav.json';

import { libraries as all_libraries } from '../../utils';

const useStyle = styleMethod(theme => ({
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
      overflowY: 'auto',
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
      position: 'fixed',
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

  header: {
    top: '8px',
    left: '50%',
    transform: 'translateX(-50%)',

    '&.amaui-TopAppBar-root': {
      width: `calc(100% - 48px)`,
      maxWidth: theme.breakpoints.values.lg,
      padding: 0,
      background: 'transparent',
      backdropFilter: 'blur(12px)',
      borderRadius: theme.methods.shape.radius.value('xxl', 'px'),
      transition: [
        theme.methods.transitions.make(['transform', 'left'], { duration: 'rg' }),
        theme.methods.transitions.make(['background', 'max-width', 'box-shadow'], { duration: 'complex' })
      ].join(', '),
      zIndex: theme.z_index.tooltip + 1
    },

    '& .amaui-TopAppBar-wrapper': {
      height: 'unset',
      padding: '12px 24px'
    }
  },

  header_withNavigationDrawer: {
    left: `calc(50% ${theme.direction === 'ltr' ? '+' : '-'} 137px)`,

    '&.amaui-TopAppBar-root': {
      width: `calc(100% - 354px)`,
    }
  },

  header_not_top: {
    '&.amaui-TopAppBar-root': {
      maxWidth: theme.breakpoints.values.md,
      boxShadow: theme.shadows.values.default['2']
    }
  },

  header_down: {
    '&.amaui-TopAppBar-root': {
      transform: 'translate(-50%, calc(-100% - 16px))'
    }
  },

  logo: {
    height: '44px',
    width: 'auto',
    cursor: 'pointer',
    userSelect: 'none',

    '& path:nth-child(1)': {
      fill: theme.palette.light ? 'hsl(60deg 100% 49%)' : 'hsl(60deg 100% 15%)'
    }
  },

  icon: {
    width: 'auto',
    height: '24px',
    fill: 'currentColor'
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

const MenuItemNext = (props: any) => {
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

function Header(props: any) {
  const {
    init,
    setOpen
  } = props;

  const theme = useAmauiTheme();

  const { classes } = useStyle(props);

  const smallerScreen = useMediaQuery('(max-width: 1100px)');
  const mediumScreen = useMediaQuery('(max-width: 1540px)');
  const mobile = useMediaQuery('(pointer: coarse)');

  const scrollNotTop = useScroll({ offset: 1 });
  const scrollDown = useScroll({ direction: 'down', offset: smallerScreen ? 40 : mediumScreen ? 100 : 200 });

  const refs = {
    storage: new AmauiStorage({ namespace: 'amaui-docs' }),
    sidenavMenu: React.useRef<any>(),
    previousURL: React.useRef<string>(),
    props: React.useRef<any>()
  };

  const sidenavMenu: any = React.useMemo(() => {
    const url = props.url !== undefined ? props.url : refs.previousURL.current;

    const menu = sidenavJSON.find((item: any) => url?.replace(/#.*/, '').indexOf(item.url) === 0);

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

  const libraries = React.useMemo(() => {
    return all_libraries;
  }, []);

  const propsURL = props.url !== undefined ? props.url : refs.previousURL.current;

  const isLibrary = propsURL?.indexOf('/library/') === 0;

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

      const MenuItemComponent = isUrl ? MenuItemNext : React.Fragment;
      const MenuItemComponentProps: any = {};

      if (isUrl) {
        MenuItemComponentProps.key = index;
        MenuItemComponentProps.href = item.url;
        MenuItemComponentProps.onClick = () => setOpen(false);
      }

      return (
        <MenuItemComponent
          {...MenuItemComponentProps}
        >
          <MenuItem
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
        </MenuItemComponent>
      );
    });
  }, [openList, toggleList, NavigationDrawerProps]);

  return (
    <TopAppBar
      start={[
        ...((init && smallerScreen && isLibrary) ? [(
          <IconButton
            color='inherit'

            onClick={() => setOpen(true)}

            style={{
              marginInlineEnd: 16
            }}
          >
            <IconMaterialMenuRounded />
          </IconButton>
        )] : []),

        <LinkNext
          href='/'
        >
          <span>
            <Logo
              className={classNames([
                classes.logo
              ])}
            />
          </span>
        </LinkNext>
      ]}

      end={[
        <MenuDesktop
          key={0}

          WrapperMenuProps={{
            elevation: 12,

            style: {
              background: theme.methods.palette.color.colorToRgb(theme.palette.light ? theme.palette.background.default.secondary : theme.palette.background.default.tertiary, 94)
            }
          }}

          items={[
            {
              label: 'Libraries',

              value: 'libraries',

              menu: (
                <List
                  tonal

                  color='primary'

                  size='regular'

                  menu

                  style={{
                    maxHeight: 400,
                    overflowY: 'auto',
                    background: 'transparent'
                  }}
                >
                  {libraries.map((item: any, index: number) => {

                    return (
                      <MenuItemNext
                        key={index}

                        href={item.url}

                        menuCloseOnClick
                      >
                        <MenuItem
                          primary={item.name}

                          selected={props.url?.indexOf(`${item.url}/`) === 0}

                          color='inherit'

                          {...(item.version !== undefined ? {
                            ...(item.version === 'primary' ? {
                              start: (
                                <IconMaterialAutoAwesomeRounded
                                  color={item.version}

                                  size='small'
                                />
                              ),

                              startAlign: 'center'
                            } : {
                              start: (
                                <IconMaterialAutoAwesomeRounded
                                  color={item.version}

                                  size='small'
                                />
                              ),

                              startAlign: 'center'
                            })
                          } : undefined)}

                          button

                          style={{
                            minWidth: 247
                          }}
                        />
                      </MenuItemNext>
                    );
                  })}
                </List>
              )
            }
          ]}

          AppendProps={{
            alignment: !mobile ? 'end' : 'center'
          }}
        />,

        <Tooltip
          key={1}

          label='amaui org'

          color='inverted'
        >
          <IconButton
            color='inherit'

            Component='a'

            href='https://github.com/amaui-org'

            target='_blank'
          >
            <IconGithub
              className={classNames([
                classes.icon
              ])}
            />
          </IconButton>
        </Tooltip>
      ]}

      position='fixed'

      Component='header'

      className={classNames([
        classes.header,
        init && withNavigationDrawer && classes.header_withNavigationDrawer,
        scrollNotTop && classes.header_not_top,
        scrollDown && classes.header_down
      ])}
    />
  );
}

export default Header;
