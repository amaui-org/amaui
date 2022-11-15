import React from 'react';
import Head from 'next/head';

import { IconButton, Line, Link, Surface, Tooltip, TopAppBar, Type, useScroll } from '@amaui/ui-react';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Logo from '../../public/assets/svg/logo.svg';

import IconGithub from '../../public/assets/svg/github.svg';

import Page from './page';

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

    '& path:nth-child(2)': {
      fill: theme.palette.light ? theme.palette.background.default.primary : theme.palette.color.primary[10]
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
  }
}), { name: 'root' });

function Root(props: any) {
  const theme = useAmauiTheme();

  const notTop = useScroll({ offset: 1 });

  const { classes } = useStyle(props);

  return <>
    <Head>
      <title>amaui docs</title>
    </Head>

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
          <Logo
            className={classNames([
              classes.logo
            ])}
          />
        )}

        end={[
          <Tooltip
            key={0}

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
    </Surface>
  </>;
}

export default Root;
