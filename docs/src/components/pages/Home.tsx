import React from 'react';

import Head from 'next/head';

import { random } from '@amaui/utils';
import { AreaChart, Avatar, Button, Card, CardFooter, CardHeader, CardImage, CardMain, Checkbox, DatePicker, DonutChart, Fab, Fade, IconButton, Line, Link, ListItem, Masonry, Placeholder, Radio, Rating, Slider, Surface, Switch, Tab, Tabs, TimePicker, Tooltip, Tree, Type, useMediaQuery, Weather } from '@amaui/ui-react';
import { classNames, colors, style, useAmauiTheme } from '@amaui/style-react';
import AmauiStorage from '@amaui/storage';

import IconMaterialLightModeRounded from '@amaui/icons-material-react/IconMaterialLightModeRounded';
import IconMaterialDarkModeRounded from '@amaui/icons-material-react/IconMaterialDarkModeRounded';
import IconMaterialFormatTextdirectionLToRRounded from '@amaui/icons-material-react/IconMaterialFormatTextdirectionLToRRounded';
import IconMaterialFormatTextdirectionRToLRounded from '@amaui/icons-material-react/IconMaterialFormatTextdirectionRToLRounded';
import IconMaterialPottedPlantRounded from '@amaui/icons-material-react/IconMaterialPottedPlantRounded';
import IconMaterialFolderRounded from '@amaui/icons-material-react/IconMaterialFolderRounded';
import IconMaterialFolderOpenRounded from '@amaui/icons-material-react/IconMaterialFolderOpenRounded';
import IconMaterialFiberManualRecordRounded from '@amaui/icons-material-react/IconMaterialFiberManualRecordRoundedFilled';
import IconMaterialMoreVertRounded from '@amaui/icons-material-react/IconMaterialMoreVertRounded';

import Logo from '../../../public/assets/svg/logo.svg';

import { images } from '../../utils';

const useStyle = style(theme => ({
  root: {
    width: '100vw',
    flex: '1 1 auto',
    background: 'transparent',

    '& .AmauiTimePicker-mode': {
      margin: 0
    }
  },

  main_wrapper: {
    width: '100%',
    padding: 'clamp(104px, 14vw, 240px) 44px'
  },

  main_title: {
    textAlign: 'center'
  },

  main_text: {
    maxWidth: theme.breakpoints.values.md,
    textAlign: 'center',
    fontSize: 'clamp(2.1rem, 4vw, 4.4rem)'
  },

  text_secondary: {
    color: theme.palette.color.secondary[50],
    opacity: 1
  },

  text_primary: {
    color: theme.palette.color.primary[50],
    opacity: 1
  },

  presentation_wrapper: {
    width: '100%',
    padding: '0px 24px clamp(40px, 5vw, 104px)'
  },

  about_wrapper: {
    width: '100%',
    padding: 'clamp(40px, 5vw, 104px) 44px',
    background: theme.methods.palette.color.value('primary', 95, true)
  },

  about_text: {
    maxWidth: theme.breakpoints.values.md,
    textAlign: 'center',
    fontSize: 'clamp(1rem, 4vw, 1.5rem)'
  },

  logo: {
    '& path:nth-child(1)': {
      fill: theme.palette.light ? 'hsl(60deg 100% 49%)' : 'hsl(60deg 100% 15%)'
    }
  },

  library: {
    '& > svg': {
      height: '44px',
      width: 'auto'
    }
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
  },

  masonry: {
    margin: '44px auto 0',
    width: 'calc(100% - 88px)',
    maxWidth: theme.breakpoints.values.xl
  }
}), { name: 'root' });

export default function Root(props: any) {
  const { classes } = useStyle(props);

  const theme = useAmauiTheme();

  const refs = {
    storage: new AmauiStorage({ namespace: 'amaui-docs' })
  };

  const [init, setInit] = React.useState(false);
  const [imageSelected, setImageSelected] = React.useState<any>('primary');
  const [values, setValues] = React.useState<any>({
    tree_1: true,
    tree_11: true,
    tree_12: true,
    tree_13: true
  });
  const [inProp, setInProp] = React.useState(false);
  const light = useMediaQuery('(prefers-color-scheme: light)');

  React.useEffect(() => {
    const imageSelected_ = refs.storage.get('image-selected');

    if (imageSelected_ !== null) {
      setImageSelected(imageSelected_);
    }

    setTimeout(() => {
      setInProp(true);
    }, 700);

    setInit(true);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (init) {
      update('light', light);
    }
  }, [light]);

  const valueArea = React.useMemo(() => Array.from({ length: 7 }).map(() => [random(-40, 400), random(-40, 400)]), []);

  // const valueArea = React.useMemo(() => [[0, 20], [40, 140], [60, 50], [104, 104], [140, 15], [170, 70], [240, 40]], []);

  const valueDonut = React.useMemo(() => [
    {
      color: 'primary',

      name: 'Sun',

      values: Array.from({ length: 1 }).map(() => random(40, 400))
    },
    {
      color: 'secondary',

      name: 'Vegetables',

      values: Array.from({ length: 1 }).map(() => random(40, 400))
    },
    {
      color: 'tertiary',

      name: 'Trees',

      values: Array.from({ length: 1 }).map(() => random(40, 400))
    },
    {
      color: 'quaternary',

      name: 'Energy',

      values: Array.from({ length: 1 }).map(() => random(40, 400))
    }
  ], []);

  const updateValue = (value: any, property: string) => {
    setValues((values_: any) => ({
      ...values_,

      [property]: value
    }))
  };

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

  const attribution = (version: string = imageSelected) => images.find(image => image.version === version)?.alt;

  const placeholders = [39.5, 232, 49.5, 56, 480, 501, 747.5, 421.5, 228, 276, 108, 72, 88];

  return <>
    <Head>
      <title>amaui</title>

      <meta property='description' content='Make Modern Web &amp; Mobile Apps Quickly 100+ UI elements' />

      <meta property='og:description' content='Make Modern Web &amp; Mobile Apps Quickly 100+ UI elements' />

      {light ? <>
        <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicon/light/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicon/light/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicon/light/favicon-16x16.png' />
        <link rel='manifest' href='/assets/favicon/light/site.webmanifest' />
        <link rel='mask-icon' href='/assets/favicon/light/safari-pinned-tab.svg' color='#fafa00' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#fafa00' />
      </> :
        <>
          <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicon/dark/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicon/dark/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicon/dark/favicon-16x16.png' />
          <link rel='manifest' href='/assets/favicon/dark/site.webmanifest' />
          <link rel='mask-icon' href='/assets/favicon/dark/safari-pinned-tab.svg' color='#4d4c00' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='theme-color' content='#4d4c00' />
        </>}
    </Head>

    <Surface
      tonal

      color='primary'

      gap={0}

      Component={Line}

      className={classNames([
        classes.root
      ])}
    >
      {/* Main */}
      <section
        className={classNames([
          classes.main_wrapper
        ])}
      >
        <Line
          align='center'

          justify='center'

          className={classNames([
            classes.main
          ])}
        >
          <Type
            version='l2'

            color='secondary'

            className={classNames([
              classes.main_title,
              classes.text_secondary
            ])}
          >
            Worlds First 100% Open Source Material Design 3 Based UI Library
          </Type>

          <Type
            version='d1'

            className={classNames([
              classes.main_text
            ])}
          >
            Make Modern Web & Mobile Apps Quickly <Type version='none' color='primary' Component='span' className={classes.text_primary}>100+ UI elements</Type>
          </Type>
        </Line>
      </section>

      {/* Presentation */}
      <section
        className={classNames([
          classes.presentation_wrapper
        ])}
      >
        {/* Options */}
        <Line
          direction='row'

          align='center'

          justify='center'

          wrap='wrap'
        >
          <Tooltip
            label={theme.palette.light ? 'Light theme' : 'Dark theme'}
          >
            <Switch
              color='primary'

              OnIcon={<IconMaterialLightModeRounded />}

              OffIcon={<IconMaterialDarkModeRounded />}

              checked={theme.palette.light}

              onChange={(value: boolean) => update('light', value)}
            />
          </Tooltip>

          <Tooltip
            label={theme.direction === 'ltr' ? 'Left to right' : 'Right to left'}
          >
            <Switch
              color='primary'

              OnIcon={<IconMaterialFormatTextdirectionLToRRounded />}

              OffIcon={<IconMaterialFormatTextdirectionRToLRounded />}

              checked={theme.direction === 'ltr'}

              onChange={(value: boolean) => update('direction', value)}
            />
          </Tooltip>

          {images.map((item: any, index: number) => (
            <Tooltip
              key={index}

              label={item.label}
            >
              <Avatar
                {...(item.color ? {
                  color: item.color
                } : {
                  image: item.image,

                  alt: item.alt
                })}

                onClick={() => update('image', item.version)}

                className={classNames([
                  classes.image_option,
                  imageSelected === item.version && classes.image_option_selected
                ])}
              />
            </Tooltip>
          ))}
        </Line>

        <Fade
          in={init && !inProp}

          removeOnExited
        >
          <Masonry
            className={classes.masonry}
          >
            {placeholders.map((item, index: number) => (
              <Placeholder
                key={index}

                height={item}

                width='100%'
              />
            ))}
          </Masonry>
        </Fade>

        <Fade
          in={!init}

          removeOnExited
        >
          <div
            style={{
              height: 873
            }}
          />
        </Fade>

        {/* UI elements */}
        <Fade
          in={inProp}

          removeOnExited
        >
          <Masonry
            className={classes.masonry}
          >
            <Button
              tonal
            >
              Button
            </Button>

            <Tree
              color='inherit'

              open={values['tree_1']}

              onChange={(value: any) => updateValue(value, 'tree_1')}

              line

              middle='src'

              icon={<IconMaterialFolderRounded size='small' />}

              iconOpen={<IconMaterialFolderOpenRounded size='small' />}

              end={(
                <IconMaterialFiberManualRecordRounded
                  size={12}

                  color='warning'
                />
              )}

              MiddleProps={{
                version: 'l2'
              }}

              style={{
                minWidth: 204
              }}
            >
              <Tree
                open={values['tree_11']}

                onChange={(value: any) => updateValue(value, 'tree_11')}

                middle='Accordion'

                icon={<IconMaterialFolderRounded size='small' />}

                iconOpen={<IconMaterialFolderOpenRounded size='small' />}

                MiddleProps={{
                  version: 'l2'
                }}
              >
                <Tree
                  middle='Accordion.jsx'

                  icon={<IconMaterialFiberManualRecordRounded
                    size='small'

                    color='secondary'
                  />}

                  MiddleProps={{
                    version: 'b2',
                    priority: 'secondary'
                  }}
                />

                <Tree
                  middle='index.jsx'

                  icon={<IconMaterialFiberManualRecordRounded
                    size='small'

                    color='secondary'
                  />}

                  MiddleProps={{
                    version: 'b2',
                    priority: 'secondary'
                  }}
                />
              </Tree>

              <Tree
                open={values['tree_12']}

                onChange={(value: any) => updateValue(value, 'tree_12')}

                middle='Append'

                icon={<IconMaterialFolderRounded size='small' />}

                iconOpen={<IconMaterialFolderOpenRounded size='small' />}

                MiddleProps={{
                  version: 'l2'
                }}
              >
                <Tree
                  middle='Append.jsx'

                  icon={<IconMaterialFiberManualRecordRounded
                    size='small'

                    color='secondary'
                  />}

                  end={(
                    <IconMaterialFiberManualRecordRounded
                      size={12}

                      color='warning'
                    />
                  )}

                  MiddleProps={{
                    version: 'b2',
                    priority: 'secondary'
                  }}
                />

                <Tree
                  middle='index.jsx'

                  icon={<IconMaterialFiberManualRecordRounded
                    size='small'

                    color='secondary'
                  />}

                  MiddleProps={{
                    version: 'b2',
                    priority: 'secondary'
                  }}
                />
              </Tree>

              <Tree
                open={values['tree_13']}

                onChange={(value: any) => updateValue(value, 'tree_13')}

                middle='AutoComplete'

                icon={<IconMaterialFolderRounded size='small' />}

                iconOpen={<IconMaterialFolderOpenRounded size='small' />}

                MiddleProps={{
                  version: 'l2'
                }}
              >
                <Tree
                  middle='AutoComplete.jsx'

                  icon={<IconMaterialFiberManualRecordRounded
                    size='small'

                    color='secondary'
                  />}

                  MiddleProps={{
                    version: 'b2',
                    priority: 'secondary'
                  }}
                />

                <Tree
                  middle='index.jsx'

                  icon={<IconMaterialFiberManualRecordRounded
                    size='small'

                    color='secondary'
                  />}

                  MiddleProps={{
                    version: 'b2',
                    priority: 'secondary'
                  }}
                />
              </Tree>
            </Tree>

            <Tabs
              justify='center'
            >
              <Tab>Home</Tab>
              <Tab>Products</Tab>
              <Tab>About</Tab>
            </Tabs>

            <Fab
              version='filled'
            >
              <IconMaterialPottedPlantRounded /> Fab
            </Fab>

            <AreaChart
              guidelines='both'

              names={{
                y: 'Value',
                x: 'Quantity',
              }}

              labelsAutoNumber={5}

              marksAutoNumber={5}

              minPaddingY={0.14}

              maxPaddingY={0.14}

              linearGradient

              values={[
                {
                  color: 'primary',

                  name: 'a',

                  values: valueArea
                }
              ]}

              style={{
                padding: '14px 32px 0px 14px'
              }}
            />

            <div>
              <TimePicker
                version='static'

                versionStatic='select'

                switch={false}

                className={classes.timePicker}
              />
            </div>

            <Card
              style={{
                maxWidth: 'unset'
              }}
            >
              <CardHeader>
                <ListItem
                  color='primary'

                  primary='Item'

                  secondary='Description'

                  Component='div'

                  start={(
                    <Avatar
                      color='primary'
                    >
                      A
                    </Avatar>
                  )}

                  end={(
                    <IconButton>
                      <IconMaterialMoreVertRounded />
                    </IconButton>
                  )}

                  noPadding
                />
              </CardHeader>

              <CardImage
                alt={attribution()}

                image={[undefined, 'primary'].includes(imageSelected) ? '/assets/image/image-yellow.jpg' : `/assets/image/${imageSelected}.jpg`}

                shape='all'

                style={{
                  backgroundColor: theme.palette.color.primary[50]
                }}
              />

              <CardMain
                gap={1}
              >
                <Type
                  version='h3'

                  style={{ marginBottom: '4px' }}
                >
                  Product
                </Type>

                <Type
                  version='l1'
                >
                  Good quality
                </Type>

                <Type
                  version='b2'

                  priority='secondary'
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Type>
              </CardMain>

              <CardFooter>
                <Button
                  tonal

                  version='outlined'
                >
                  Preview
                </Button>

                <Button
                  version='filled'

                  elevation={false}
                >
                  Buy
                </Button>
              </CardFooter>
            </Card>

            <div>
              <DatePicker
                version='static'

                versionStatic='docked'
              />
            </div>

            <Line
              align='center'

              justify='center'

              style={{
                padding: '24px 0'
              }}
            >
              <Weather
                temperature={14}

                weather='clear'
              />
            </Line>

            <DonutChart
              values={valueDonut}
            />

            <Slider
              valueDefault={50}

              tooltip

              style={{
                padding: '54px 0'
              }}
            />

            <Line
              align='center'

              justify='center'

              style={{
                padding: '24px 0'
              }}
            >
              <Rating
                valueDefault={5}
              />
            </Line>

            <Line
              direction='row'

              align='center'

              justify='center'

              style={{
                padding: '24px 0'
              }}
            >
              <Switch
                valueDefault={true}
              />

              <Checkbox
                valueDefault={true}
              />

              <Radio />
            </Line>
          </Masonry>
        </Fade>
      </section>

      {/* About */}
      <section
        className={classNames([
          classes.about_wrapper
        ])}
      >
        <Line
          align='center'

          justify='center'

          className={classNames([
            classes.about
          ])}
        >
          <Type
            version='t2'

            color='secondary'

            className={classes.text_secondary}
          >
            About
          </Type>

          <Type
            version='h3'

            className={classNames([
              classes.about_text
            ])}
          >
            I am Lazar Eric, maker of amaui. I made amaui ecosystem of front-end & back-end tools, including UI React library with 100+ UI elements, based on newest Material Design 3, all a 100% Open source and free to use, as I want to push our market forward.
            <br /> <br />

            Waste less time on building tools, and more on making modern apps quickly, with quality.
          </Type>

          <Type
            version='l1'

            priority='secondary'

            style={{
              marginTop: 54,
              marginBottom: 12
            }}
          >
            amaui made
          </Type>

          <Line
            gap={3}

            direction='row'

            align='center'

            justify='center'

            wrap='wrap'
          >
            <Line
              gap={5}

              direction='row'

              align='center'

              justify='center'

              wrap='wrap'
            >
              {[
                { name: 'UI', desc: 'UI React library, based on Material Design 3', url: 'https://github.com/amaui-org/amaui' },
                { name: 'Utils', desc: 'Utils for front-end, back-end', url: 'https://github.com/amaui-org/amaui-utils' },
                { name: 'Style', desc: 'Amaui CSS in JS library', url: 'https://github.com/amaui-org/amaui-style' },
                { name: 'Date', desc: 'Date & time utils', url: 'https://github.com/amaui-org/amaui-date' },
                { name: 'Request', desc: 'Request making for front-end, back-end', url: 'https://github.com/amaui-org/amaui-request' },
                { name: 'Test', desc: 'Test framework for front-end, back-end', url: 'https://github.com/amaui-org/amaui-test' }
              ].map((item: any, index: number) => (
                <Tooltip
                  key={index}

                  label={item.desc}
                >
                  <Line
                    gap={1}

                    align='center'

                    justify='center'

                    color='inherit'

                    href={item.url}

                    target='_blank'

                    underline={false}

                    Component={Link}

                    className={classNames([
                      classes.library
                    ])}
                  >
                    <Logo
                      className={classes.logo}
                    />

                    <Type
                      version='b2'
                    >
                      {item.name}
                    </Type>
                  </Line>
                </Tooltip>
              ))}
            </Line>

            <Button
              color={theme.palette.color.secondary[50]}

              version='text'

              href='https://github.com/amaui-org'

              target='_blank'
            >
              More 24+ libraries
            </Button>
          </Line>
        </Line>
      </section>
    </Surface>
  </>;
}
