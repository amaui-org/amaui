import React from 'react';
import LinkNext from 'next/link';

import { Avatar, IconButton, Line, Link, List, ListItem, MenuDesktop, SpeedDial, SpeedDialItem, Surface, Switch, Tooltip, TopAppBar, Type, useMediaQuery, useScroll } from '@amaui/ui-react';
import { classNames, colors, style as styleMethod, useAmauiTheme } from '@amaui/style-react';
import AmauiStorage from '@amaui/storage';

import IconMaterialTempPreferencesCustomRounded from '@amaui/icons-material-react/IconMaterialTempPreferencesCustomRounded';
import IconMaterialLightModeRounded from '@amaui/icons-material-react/IconMaterialLightModeRounded';
import IconMaterialDarkModeRounded from '@amaui/icons-material-react/IconMaterialDarkModeRounded';
import IconMaterialFormatTextdirectionLToRRounded from '@amaui/icons-material-react/IconMaterialFormatTextdirectionLToRRounded';
import IconMaterialFormatTextdirectionRToLRounded from '@amaui/icons-material-react/IconMaterialFormatTextdirectionRToLRounded';

import Logo from '../../public/assets/svg/logo.svg';
import IconGithub from '../../public/assets/svg/github.svg';

import Home from '../components/pages/Home';
import Library from '../components/pages/Library';

import { images, libraries as all_libraries } from '../utils';

const useStyle = styleMethod(theme => ({
  '@p': {
    '*': {
      margin: '0px',
      padding: '0px',
      border: '0px',
      outline: 'none',
      fontSize: '100%',
      background: 'transparent',
      boxSizing: 'border-box',
      touchAction: 'manipulation'
    },

    body: {
      color: theme.palette.text.default.primary,
      background: theme.palette.light ? theme.palette.background.default.primary : theme.palette.background.primary.secondary,

      fontWeight: 'normal',
      fontStyle: 'normal',
      position: 'relative',
      overflowX: 'hidden',
    }
  },

  root: {
    minHeight: '100vh',
    background: 'transparent'
  },

  header: {
    top: '8px',
    left: '50%',
    transform: 'translateX(-50%)',

    '&.AmauiTopAppBar-root': {
      width: `calc(100% - 48px)`,
      maxWidth: theme.breakpoints.values.lg,
      padding: 0,
      background: 'transparent',
      borderRadius: theme.methods.shape.radius.value('xxl', 'px'),
      transition: theme.methods.transitions.make(['background', 'max-width', 'box-shadow'], { duration: 'complex' }),
      zIndex: theme.z_index.tooltip + 14
    },

    '& .AmauiTopAppBar-wrapper': {
      height: 'unset',
      padding: '12px 24px'
    }
  },

  header_not_top: {
    '&.AmauiTopAppBar-root': {
      background: theme.methods.palette.color.colorToRgb(theme.palette.color.primary[theme.palette.light ? 99 : 10] as string, 0.97),
      maxWidth: theme.breakpoints.values.md,
      boxShadow: theme.shadows.values.default['2']
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

    '& > *': {
      display: 'flex',
      width: '100%',
      flex: '1 1 auto'
    }
  },

  footer: {
    width: '100%',
    padding: '64px 24px 24px',
    flex: '0 0 auto'
  },

  image_option: {
    transition: theme.methods.transitions.make('transform', { duration: 'sm' }),

    '&:active': {
      transform: 'scale(0.91)'
    },

    '&.AmauiAvatar-root': {
      cursor: 'pointer'
    }
  },

  image_option_selected: {
    boxShadow: `0px 0px 0px 1px ${theme.palette.text.default.primary}`
  }
}), { name: 'root' });

const ListItemNext = (props: any) => {
  const {
    href,

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

  const notTop = useScroll({ offset: 1 });

  const mobile = useMediaQuery('(pointer: coarse)');

  const light = useMediaQuery('(prefers-color-scheme: light)');

  const [init, setInit] = React.useState(false);
  const [imageSelected, setImageSelected] = React.useState('');

  const refs = {
    storage: new AmauiStorage({ namespace: 'amaui-docs' }),
    imageSelected: React.useRef<any>()
  };

  const { classes } = useStyle(props);

  refs.imageSelected.current = imageSelected;

  React.useEffect(() => {
    if (window.matchMedia?.('(prefers-color-scheme: dark)')?.matches) update('light', false);

    const imageSelected_ = refs.storage.get('image-selected');

    if (imageSelected_ !== null) {
      update('image', imageSelected_);
    }

    const direction = refs.storage.get('direction');

    if (direction !== null) update('direction', direction);

    setInit(true);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (init) {
      update('light', light);
    }
  }, [light]);

  const update = async (version = 'light', value: any = true) => {
    let values_ = {};

    switch (version) {
      case 'light':
        theme.updateWithRerender({
          palette: {
            light: value
          }
        });

        refs.storage.add('light', value);

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

            break;

          case 'image-green':
            await theme.image('/assets/image/image-green.jpg');

            break;

          case 'image-orange':
            await theme.image('/assets/image/image-orange.jpg');

            break;

          case 'image-pink':
            await theme.image('/assets/image/image-pink.jpg');

            break;

          default:
            break;
        }

        theme.updateWithRerender(values_);

        setImageSelected(value);

        refs.storage.add('image-selected', value);

        break;

      default:
        break;
    }
  };

  const libraries = React.useMemo(() => {
    return all_libraries;
  }, []);

  const isLibrary = libraries.find(item => props.url?.indexOf(item.url) === 0);

  const Page = !isLibrary ? Home : Library;

  return (
    <Surface
      tonal

      color='primary'

      gap={0}

      direction='column'

      Component={Line}

      className={classNames([
        classes.root
      ])}
    >
      {/* Header */}
      <TopAppBar
        start={(
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
        )}

        end={[
          //   <MenuDesktop
          //     key={0}

          //     items={[
          //       {
          //         label: 'Libraries',

          //         value: 'libraries',

          //         menu: (
          //           <List
          //             tonal

          //             color='primary'

          //             size='regular'

          //             menu

          //             style={{
          //               maxHeight: 400,
          //               overflowY: 'auto'
          //             }}
          //           >
          //             {libraries.map((item, index: number) => {

          //               return (
          //                 <ListItemNext
          //                   key={index}

          //                   href={item.url}

          //                   menuCloseOnClick
          //                 >
          //                   <ListItem
          //                     primary={item.name}

          //                     selected={item.url === props.url}

          //                     button

          //                     style={{
          //                       minWidth: 240
          //                     }}
          //                   />
          //                 </ListItemNext>
          //               );
          //             })}
          //           </List>
          //         )
          //       }
          //     ]}

          //     AppendProps={{
          //       alignment: !mobile ? 'end' : 'center'
          //     }}
          //   />,

          <Tooltip
            key={1}

            label='amaui org'

            color='inverted'
          >
            <IconButton
              color='inherit'

              Component='a'

              href='https://github.com/amaui-org/amaui'

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

          notTop && classes.header_not_top
        ])}
      />

      {/* Main */}
      <Line
        Component='main'

        className={classNames([
          classes.main
        ])}
      >
        <Page {...props} />
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

              color={theme.palette.color.secondary[50]}
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
          Copyright © 2022 Lazar Eric
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

      {/* SpeedDial */}
      <SpeedDial
        direction='bottom'

        alignment='end'

        Icon={IconMaterialTempPreferencesCustomRounded}
      >
        {[...images].reverse().map((item: any, index: number) => (
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

                  onClick={() => update('image', item.version)}

                  className={classNames([
                    otherItem?.className,
                    classes.image_option,
                    refs.imageSelected.current === item.version && classes.image_option_selected
                  ])}
                />
              </Tooltip>
            )}
          />
        ))}

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
      </SpeedDial>
    </Surface>
  );
}

export default Root;
