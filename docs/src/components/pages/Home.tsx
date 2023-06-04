import React from 'react';
import { useRouter } from 'next/router';

import { is, random } from '@amaui/utils';
import { AreaChart, Avatar, Button, Card, CardFooter, CardHeader, CardImage, CardMain, Checkbox, DatePicker, DonutChart, Fab, Fade, IconButton, Line, Link, ListItem, Masonry, Radio, Rating, Reveal, Slider, Surface, Switch, Tab, Tabs, TimePicker, Tooltip, Tree, Type, useMediaQuery, Weather } from '@amaui/ui-react';
import { classNames, colors, style, useAmauiTheme } from '@amaui/style-react';
import AmauiStorage from '@amaui/storage';

import IconMaterialLightModeRounded from '@amaui/icons-material-rounded-react/IconMaterialLightMode';
import IconMaterialDarkModeRounded from '@amaui/icons-material-rounded-react/IconMaterialDarkMode';
import IconMaterialFormatTextdirectionLToRRounded from '@amaui/icons-material-rounded-react/IconMaterialFormatTextdirectionLToR';
import IconMaterialFormatTextdirectionRToLRounded from '@amaui/icons-material-rounded-react/IconMaterialFormatTextdirectionRToL';
import IconMaterialPottedPlantRounded from '@amaui/icons-material-rounded-react/IconMaterialPottedPlant';
import IconMaterialFolderRounded from '@amaui/icons-material-rounded-react/IconMaterialFolder';
import IconMaterialFolderOpenRounded from '@amaui/icons-material-rounded-react/IconMaterialFolderOpen';
import IconMaterialFiberManualRecordRounded from '@amaui/icons-material-rounded-react/IconMaterialFiberManualRecordFilled';
import IconMaterialMoreVertRounded from '@amaui/icons-material-rounded-react/IconMaterialMoreVert';
import IconMaterialEastRounded from '@amaui/icons-material-rounded-react/IconMaterialEast';

import Logo from '../../../public/assets/svg/logo.svg';

import { images, newImagesSub, themeImageSub } from '../../utils';

const useStyle = style(theme => ({
  root: {
    width: '100vw',
    flex: '1 1 auto',
    background: 'transparent',

    '& .amaui-TimePicker-main, & .amaui-Calendar-root, & .amaui-DatePicker-mobile': {
      width: '100%',
      maxWidth: 'unset',
      margin: 0
    },

    '& .amaui-TimePicker-mode': {
      margin: 0
    }
  },

  main_wrapper: {
    width: '100%',
    padding: 'clamp(104px, 14vw, 240px) 44px clamp(104px, 14vw, 140px)'
  },

  subheadline: {
    textAlign: 'center'
  },

  headline_modern: {
    maxWidth: theme.breakpoints.values.md,
    textAlign: 'center',
    fontSize: 'clamp(2.1rem, 4vw, 4.4rem)',
    backgroundImage: `linear-gradient(130deg, ${theme.palette.color.primary.main} 0%, ${theme.palette.color.quaternary.main} 100%)`,
    '-webkit-background-clip': 'text',
    backgroundClip: 'text',
    '-webkit-text-fill-color': 'transparent',
    textFillColor: 'transparent'
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
    position: 'relative',
    padding: '0px 24px clamp(40px, 5vw, 104px)'
  },

  about_wrapper: {
    width: '100%',
    padding: 'clamp(40px, 5vw, 104px) 44px',
    backgroundImage: `linear-gradient(${theme.palette.light ? '130deg' : '330deg'}, ${theme.methods.palette.color.colorToRgb(theme.palette.color.primary.main, 0.14)} 0%, ${theme.methods.palette.color.colorToRgb(theme.palette.color.secondary.main, 0.14)} 40%, ${theme.methods.palette.color.colorToRgb(theme.palette.color.quaternary.main, 0.14)} 100%)`
  },

  about_text: {
    maxWidth: theme.breakpoints.values.md,
    textAlign: 'center',
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    fontFamily: 'initial'
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
    transition: theme.methods.transitions.make(['box-shadow', 'transform'], { duration: 'sm' }),

    '&:focus-visible': {
      boxShadow: `0px 0px 0px 1px ${theme.palette.text.default.primary}`
    },

    '&:active': {
      transform: 'scale(0.91)'
    },

    '&.amaui-Avatar-root': {
      cursor: 'pointer'
    }
  },

  image_option_selected: {
    boxShadow: `0px 0px 0px 1px ${theme.palette.text.default.primary}`
  },

  masonry: {
    margin: '0 auto',
    width: 'calc(100% - 88px)',
    maxWidth: theme.breakpoints.values.xl
  },

  card: {
    maxWidth: 'unset !important',

    '&:hover': {
      '& $cardImage': {
        boxShadow: theme.shadows.values.default[24],
        transform: 'scale(1.07)'
      }
    }
  },

  cardImage: {
    clipPath: `inset(0 0 100%)`,
    background: theme.palette.color.primary[50],
    transform: 'scale(1.04)',
    transition: `${theme.methods.transitions.make(['clip-path'], { duration: 1400, timing_function: 'standard' })}, ${theme.methods.transitions.make(['box-shadow', 'transform'], { duration: 'rg', timing_function: 'decelerated' })}`
  },

  cardImageIn: {
    clipPath: 'inset(0 0 0%)'
  },

  cardImageTransitioned: {
    boxShadow: theme.shadows.values.default[8],
    clipPath: 'none'
  },

  weather: {
    '& .amaui-Weather-icon': {
      clipPath: `circle(0)`,
      transition: `${theme.methods.transitions.make(['clip-path'], { duration: 7400, timing_function: 'decelerated', delay: 1400 })}, ${theme.methods.transitions.make(['opacity', 'transform'], { duration: 'rg', timing_function: 'decelerated' })} !important`
    },

    '&:hover': {
      '& .amaui-Weather-icon': {
        transform: 'scale(1.04)'
      }
    }
  },

  weatherIn: {
    '& .amaui-Weather-icon': {
      clipPath: `circle(100%)`
    }
  }
}), { name: 'root' });

export default function Root(props: any) {
  const { classes } = useStyle(props);
  const router = useRouter();

  const theme = useAmauiTheme();

  const refs = {
    storage: new AmauiStorage({ namespace: 'amaui-docs' }),
    imageSelected: React.useRef<string>(),
    images: React.useRef<any[]>([])
  };

  const [init, setInit] = React.useState(false);
  const [inProp, setInProp] = React.useState(false);
  const [imageSelected, setImageSelected] = React.useState<string>('primary');
  const [values, setValues] = React.useState<any>({
    tree_1: true,
    tree_11: true,
    tree_12: true,
    tree_13: true
  });
  const [transitioned, setTransitioned] = React.useState<any>({});
  const [newImages, setNewImages] = React.useState<any[]>(newImagesSub.value);
  const light = useMediaQuery('(prefers-color-scheme: light)');

  const smallScreen = useMediaQuery('(max-width: 1100px)');

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

  const initiate = React.useCallback(async () => {
    const imageSelected_ = refs.storage.get('image-selected');

    update('image', imageSelected_);

    setInit(true);

    setInProp(true);
  }, []);

  React.useEffect(() => {
    initiate();

    const imageSubscription = themeImageSub.subscribe((value: string) => {
      if (value !== refs.imageSelected.current) setImageSelected(value);
    });

    const newImagesSubscription = newImagesSub.subscribe((value: any[]) => setNewImages(value));

    return () => {
      imageSubscription.unsubscribe();
      newImagesSubscription.unsubscribe();
    };
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (init) update('light', light);
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

  const attribution = (id: string = imageSelected) => images.find(image => image.id === id)?.alt;

  const img = get();

  const placeholders = [39.5, 232, 49.5, 56, 480, 501, 747.5, 421.5, 228, 108, 276, 72, 88];

  return (
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
              classes.subheadline,
              classes.text_secondary
            ])}
          >
            Worlds First 100% Open Source Material Design 3 Based UI Library
          </Type>

          <Type
            version='d1'

            className={classNames([
              classes.headline_modern
            ])}
          >
            Make Modern Web & Mobile Apps Quickly 100+ UI elements
          </Type>

          <Button
            version='filled'

            color='secondary'

            tonal

            size='large'

            end={(
              <IconMaterialEastRounded />
            )}

            onClick={() => router.push('/dev/ui-react')}

            style={{
              marginTop: 24
            }}
          >
            Start now
          </Button>
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

          {refs.images.current.map((item: any, index: number) => (
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

                onClick={() => update('image', item.id)}

                className={classNames([
                  classes.image_option,
                  img?.id === item.id && classes.image_option_selected
                ])}
              />
            </Tooltip>
          ))}
        </Line>

        <div
          style={{
            paddingTop: 44,
            minHeight: 888
          }}
        >
          {/* {init && !inProp && (
            <Fade
              in

              enterOnAdd
            >
                <Masonry
                  className={classes.masonry}

                  gap={4}
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
          )} */}

          {/* UI elements */}
          <Fade
            in={init && inProp}

            removeOnExited
          >
            <Masonry
              className={classes.masonry}

              gap={4}
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

                animateTimeout={700}

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

              <TimePicker
                switch={false}

                className={classes.timePicker}

                static
              />

              <Card
                className={classNames([
                  classes.card
                ])}
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

                <Reveal
                  offset={smallScreen ? -40 : -400}

                  inClassName={classNames([
                    classes.cardImageIn,
                    transitioned.cardImage && classes.cardImageTransitioned
                  ])}

                  onChange={(valueNew: boolean) => {
                    if (valueNew) setTimeout(() => {
                      setTransitioned((previous: any) => ({ ...previous, cardImage: true }));
                    }, 1400);
                  }}

                  noTransition
                >
                  <CardImage
                    alt={attribution()}

                    image={[undefined, 'primary'].includes(img?.id) ? '/assets/image/image-yellow.jpg' : img?.image}

                    shape='all'

                    className={classNames([
                      classes.cardImage
                    ])}
                  />
                </Reveal>

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

              <DatePicker
                static
              />

              <Line
                align='center'

                justify='center'

                style={{
                  padding: '24px 0'
                }}
              >
                <Reveal
                  offset={smallScreen ? -34 : -340}

                  inClassName={classNames([
                    classes.weatherIn
                  ])}

                  noTransition
                >
                  <Weather
                    temperature={14}

                    weather='clear'

                    className={classNames([
                      classes.weather
                    ])}
                  />
                </Reveal>
              </Line>

              <Slider
                valueDefault={50}

                tooltip

                style={{
                  padding: '54px 0'
                }}
              />

              <DonutChart
                values={valueDonut}

                animateTimeout={700}
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
        </div>
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
              marginTop: 44,
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
              gap='24px 40px'

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
              color='inherit'

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
  );
}
