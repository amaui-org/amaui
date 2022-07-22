import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';
import { Button, Expand, Fab, Fade, Focus, Grow, IconButton, Interaction, LinearProgress, Link, Portal, Reset, RoundProgress, SegmentedButtons, Slide, Surface, Transition, Transitions, Type, Zoom } from '@amaui/ui-react';

import IconMaterial10kRounded from '@amaui/icons-material-react/build/IconMaterial10kRounded';
import IconMaterialAddRounded from '@amaui/icons-material-react/build/IconMaterialAddRounded';
import IconMaterialPottedPlantRounded from '@amaui/icons-material-react/build/IconMaterialPottedPlantRounded';

const useStyleA = style(theme => ({
  a: {
    '&.a-enter': {
      opacity: 0,
    },

    '&.a-entering': {
      opacity: 1,
      transition: theme?.methods.transitions.make(['opacity'], { duration: 'rg', timing_function: 'standard' }),
    },

    '&.a-exiting': {
      opacity: 0,
      transition: theme?.methods.transitions.make(['opacity'], { duration: 'rg', timing_function: 'standard' }),
    },

    '&.a-exited': {
      opacity: 0,
      transition: theme?.methods.transitions.make(['opacity'], { duration: 'rg', timing_function: 'standard' }),
    },
  }
}), { name: 'A' });

const A = (props: any) => {
  const { classes } = useStyleA(props);

  return (
    <Transition in={props.in} prefix='a-' className>
      <a href='https://google.com' className={classes.a}>
        {props.children}
      </a>
    </Transition>
  );
};

const useStyle = style(theme => ({
  body: {
    '@p': true,

    color: theme?.palette.text?.default?.primary,
    background: theme?.palette.background?.default?.primary
  },

  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 40,
    padding: '14vw',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  h1: {
    fontSize: 15,
    fontWeight: 300,
    color: theme?.palette.text?.default?.primary,
    cursor: 'pointer',
    margin: 0,
    userSelect: 'none'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 24,
    gap: 24,
    position: 'relative'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 24
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    gap: 24
  },
  center: {
    alignItems: 'center'
  },
  btn: {
    transition: ['transform .4s ease', '!important'],

    '&:active': {
      transform: 'scale(0.91)'
    }
  },
  div: {
    width: 140,
    height: 140,
    background: '#fff5dc'
  },
  a: {
    position: 'relative',
    width: '90px',
    height: '37px',
    background: 'white',
    color: 'green',
  },
  a1: {
    '&.enter': {
      opacity: '0',
      transform: 'translateX(-100%)',
    },

    '&.entering': {
      opacity: '1',
      transform: 'translateX(0%)',
      transition: theme?.methods.transitions.make(['opacity', 'transform'], { duration: 'rg', timing_function: 'standard' }),
    },

    '&.exit': {
      opacity: '1',
      transform: 'translateX(0%)',
    },

    '&.exiting': {
      opacity: '0',
      transform: 'translateX(100%)',
      transition: theme?.methods.transitions.make(['opacity', 'transform'], { duration: 'rg', timing_function: 'standard' }),
    },
  },
  a14: {
    '&.enter': {
      opacity: '0',
      transform: 'translateX(-100%)',
    },

    '&.entering': {
      opacity: '1',
      transition: theme?.methods.transitions.make(['opacity', 'transform'], { duration: 'rg', timing_function: 'standard' }),
    },

    '&.exit': {
      opacity: '1',
      transform: 'translateX(0%)',
    },

    '&.exiting': {
      opacity: '0',
      transform: 'translateX(100%)',
      transition: theme?.methods.transitions.make(['opacity', 'transform'], { duration: 'rg', timing_function: 'standard' }),
    },
  },
  pathBackground: {
    stroke: [theme?.palette?.text?.selected, '!important']
  },

  group: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  },

}), { name: 'App' });

const Accordion = (props: any) => {
  const { classes } = useStyle();
  const [open, setOpen] = React.useState(props.open);

  return (
    <div className={classes.section}>
      <h1 className={classes.h1} onClick={() => setOpen(!open)}>{props.label}</h1>

      <Expand in={open}>
        <section className={classNames([classes.item, props.className])}>
          {props.children}
        </section>
      </Expand>
    </div>
  );
};

function App() {
  const [a, setA] = React.useState<any>({
    a: true,
    transitions: true,
    pulse: true,
    fade: true,
    grow: true,
    zoom: true,
    expand: true,
    slide: true,
    slideRef: true,
    loading: true,
    portal: false
  });
  const [progress, setProgress] = React.useState(0);
  const [items, setItems] = React.useState([0]);
  const { classes } = useStyle();
  const refs = {
    transitions: React.useRef<any>(),
    slides: {
      up: React.useRef<any>(),
      left: React.useRef<any>(),
      right: React.useRef<any>(),
      down: React.useRef<any>()
    }
  };

  const theme = useAmauiTheme();

  const updateTheme = () => theme.updateWithRerender({
    palette: {
      light: !theme.palette.light
    }
  });

  const update = (item: any) => {
    setA((values: any) => {
      const newValues = { ...values };

      newValues[item] = !newValues[item];

      return newValues;
    });
  };

  // React.useEffect(() => {
  //   const id = setInterval(() => setProgress(item => item >= 100 ? 0 : item + 10), 1000);

  //   return () => {
  //     clearInterval(id);
  //   }
  // }, []);

  // React.useEffect(() => {
  //   const rect = refs.transitions.current.getBoundingClientRect();

  //   window.scrollBy(0, Math.abs(window.innerHeight - rect.y - rect.height) * 2);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [items.length]);

  return (
    <div className={classes.root}>
      {/* Reset */}
      <Reset />

      <div className={classes.row}>
        <Button size='small' color='secondary' className={classes.btn} onClick={() => updateTheme()}>{theme.palette.light ? 'dark' : 'light'}</Button>
      </div>

      <Accordion label='Portal'>
        <Accordion label='Portal' open>
          <div className={classNames([classes.column])}>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => update('portal')}>a</Button>

            {a.portal && (
              <Portal element={window.document.body}>
                <Button>a</Button>
              </Portal>
            )}
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Focus'>
        <Accordion label='Focus' open>
          <div className={classNames([classes.column])}>
            <Focus>
              <Button color='secondary'>a</Button>
              <Button color='secondary'>a1</Button>
              <Button color='secondary'>a14</Button>
            </Focus>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Surface'>
        <Accordion label='Surface' open>
          <div className={classNames([classes.column])}>
            <Surface>Surface</Surface>
          </div>
        </Accordion>

        <Accordion label='Surface noBorderRadius' open>
          <div className={classNames([classes.column])}>
            <Surface elevation='1' noBorderRadius>Surface</Surface>
          </div>
        </Accordion>

        <Accordion label='Surface sizes' open>
          <div className={classNames([classes.column])}>
            <Surface size='small' elevation='1'>Small</Surface>
            <Surface size='regular' elevation='1'>Regular</Surface>
            <Surface size='large' elevation='1'>Large</Surface>
          </div>
        </Accordion>

        <Accordion label='Surface elevations' open>
          <div className={classNames([classes.column])}>
            <Surface elevation='0'>0</Surface>
            <Surface elevation='1'>1</Surface>
            <Surface elevation='2'>2</Surface>
            <Surface elevation='3'>3</Surface>
            <Surface elevation='4'>4</Surface>
            <Surface elevation='6'>6</Surface>
            <Surface elevation='8'>8</Surface>
            <Surface elevation='9'>9</Surface>
            <Surface elevation='12'>12</Surface>
            <Surface elevation='16'>16</Surface>
            <Surface elevation='24'>24</Surface>
          </div>
        </Accordion>

        <Accordion label='Surface colors' open>
          <div className={classNames([classes.column])}>
            <Surface color='primary'>Primary</Surface>
            <Surface color='secondary'>Secondary</Surface>
            <Surface color='tertiary'>Tertiary</Surface>
            <Surface color='quaternary'>Quaternary</Surface>
            <Surface color='info'>Info</Surface>
            <Surface color='success'>Success</Surface>
            <Surface color='error'>Error</Surface>
            <Surface color='warning'>Warning</Surface>
            <Surface color='neutral'>Neutral</Surface>
            <Surface color='#f5d758'>Other</Surface>
          </div>
        </Accordion>

        <Accordion label='Surface tonal' open>
          <div className={classNames([classes.column])}>
            <Surface color='primary' tonal={false}>Primary</Surface>
            <Surface color='secondary' tonal={false}>Secondary</Surface>
            <Surface color='tertiary' tonal={false}>Tertiary</Surface>
            <Surface color='quaternary' tonal={false}>Quaternary</Surface>
            <Surface color='info' tonal={false}>Info</Surface>
            <Surface color='success' tonal={false}>Success</Surface>
            <Surface color='error' tonal={false}>Error</Surface>
            <Surface color='warning' tonal={false}>Warning</Surface>
            <Surface color='neutral' tonal={false}>Neutral</Surface>
            <Surface color='#f5d758' tonal={false}>Other</Surface>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Link'>
        <Accordion label='Link' open>
          <div className={classNames([classes.column])}>
            <Link>Link</Link>
          </div>
        </Accordion>

        <Accordion label='Link underline' open>
          <div className={classNames([classes.column])}>
            <Link underline>Link</Link>
            <Link underline={false}>Link</Link>
            <Link underline='hover'>Link</Link>
          </div>
        </Accordion>

        <Accordion label='Link versions' open>
          <div className={classNames([classes.column])} style={{ gap: 0 }}>
            <Link version='d1'>Display 1</Link>
            <Link version='d2'>Display 2</Link>
            <Link version='d3'>Display 3</Link>

            <Link version='h1'>Heading 1</Link>
            <Link version='h2'>Heading 2</Link>
            <Link version='h3'>Heading 3</Link>

            <Link version='t1'>Title 1</Link>
            <Link version='t2'>Title 2</Link>
            <Link version='t3'>Title 3</Link>

            <Link version='l1'>Label 1</Link>
            <Link version='l2'>Label 2</Link>
            <Link version='l3'>Label 3</Link>

            <Link version='b1'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Link>

            <Link version='b2'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Link>

            <Link version='b3'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Link>
          </div>
        </Accordion>

        <Accordion label='Link colors' open>
          <div className={classNames([classes.column])}>
            <Link color='primary'>Primary</Link>
            <Link color='secondary'>Secondary</Link>
            <Link color='tertiary'>Tertiary</Link>
            <Link color='quaternary'>Quaternary</Link>
            <Link color='info'>Info</Link>
            <Link color='success'>Success</Link>
            <Link color='error'>Error</Link>
            <Link color='warning'>Warning</Link>
            <Link color='neutral'>Neutral</Link>
            <Link color='#f5d758'>Other</Link>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Type'>
        <Accordion label='Type' open>
          <div className={classNames([classes.column])}>
            <Type>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Type>
          </div>
        </Accordion>

        <Accordion label='Type versions' open>
          <div className={classNames([classes.column])} style={{ gap: 0 }}>
            <Type version='d1'>Display 1</Type>
            <Type version='d2'>Display 2</Type>
            <Type version='d3'>Display 3</Type>

            <Type version='h1'>Heading 1</Type>
            <Type version='h2'>Heading 2</Type>
            <Type version='h3'>Heading 3</Type>

            <Type version='t1'>Title 1</Type>
            <Type version='t2'>Title 2</Type>
            <Type version='t3'>Title 3</Type>

            <Type version='l1'>Label 1</Type>
            <Type version='l2'>Label 2</Type>
            <Type version='l3'>Label 3</Type>

            <Type version='b1'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Type>

            <Type version='b2'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Type>

            <Type version='b3'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Type>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Fab'>
        <Accordion label='Fab' open>
          <div className={classNames([classes.row, classes.center])}>
            <Fab><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab><IconMaterialPottedPlantRounded /></Fab>
            <Fab>Filled</Fab>
          </div>
        </Accordion>

        <Accordion label='Fab versions' open>
          <div className={classNames([classes.row, classes.center])}>
            <Fab tonal={false} color='secondary' version='filled' size='small'><IconMaterialPottedPlantRounded /> Small</Fab>
            <Fab tonal={false} color='secondary' version='filled' size='regular'><IconMaterialPottedPlantRounded /></Fab>
            <Fab tonal={false} color='secondary' version='filled' size='large'>Large</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab color='secondary' tonal version='filled' size='small'><IconMaterialPottedPlantRounded /> Small</Fab>
            <Fab color='secondary' tonal version='filled' size='regular'><IconMaterialPottedPlantRounded /></Fab>
            <Fab color='secondary' tonal version='filled' size='large'>Large</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab color='secondary' version='outlined' size='small'><IconMaterialPottedPlantRounded /> Small</Fab>
            <Fab color='secondary' version='outlined' size='regular'><IconMaterialPottedPlantRounded /></Fab>
            <Fab color='secondary' version='outlined' size='large'>Large</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab color='secondary' version='text' size='small'><IconMaterialPottedPlantRounded /> Small</Fab>
            <Fab color='secondary' version='text' size='regular'><IconMaterialPottedPlantRounded /></Fab>
            <Fab color='secondary' version='text' size='large'>Large</Fab>
          </div>
        </Accordion>

        <Accordion label='Fab color' open>
          <div className={classNames([classes.row, classes.center])}>
            <Fab tonal={false} version='text' color='primary'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='secondary'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='tertiary'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='quaternary'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='info'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='success'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='error'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='warning'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='neutral'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='#f5d758'><IconMaterialPottedPlantRounded /> Text</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab tonal={false} version='outlined' color='primary'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='secondary'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='tertiary'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='quaternary'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='info'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='success'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='error'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='warning'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='neutral'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='#f5d758'><IconMaterialPottedPlantRounded /> Outlined</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab tonal={false} version='filled' color='primary'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='secondary'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='tertiary'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='quaternary'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='info'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='success'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='error'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='warning'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='neutral'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='#f5d758'><IconMaterialPottedPlantRounded /> Filled</Fab>
          </div>
        </Accordion>

        <Accordion label='Fab color tonal' open>
          <div className={classNames([classes.row, classes.center])}>
            <Fab version='text' color='primary'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='secondary'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='tertiary'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='quaternary'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='info'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='success'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='error'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='warning'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='neutral'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='#f5d758'><IconMaterialPottedPlantRounded /> Text</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab version='outlined' color='primary'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='secondary'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='tertiary'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='quaternary'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='info'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='success'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='error'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='warning'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='neutral'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='#f5d758'><IconMaterialPottedPlantRounded /> Outlined</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab version='filled' color='primary'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='secondary'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='tertiary'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='quaternary'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='info'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='success'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='error'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='warning'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='neutral'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='#f5d758'><IconMaterialPottedPlantRounded /> Filled</Fab>
          </div>
        </Accordion>

        <Accordion label='Fab size' open>
          <div className={classNames([classes.row, classes.center])}>
            <Fab size='small'><IconMaterialPottedPlantRounded /> Small</Fab>
            <Fab size='small'><IconMaterialPottedPlantRounded /></Fab>
            <Fab size='small'>Small</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab size='regular'><IconMaterialPottedPlantRounded /> Regular</Fab>
            <Fab size='regular'><IconMaterialPottedPlantRounded /></Fab>
            <Fab size='regular'>Regular</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab size='large'><IconMaterialPottedPlantRounded /> Large</Fab>
            <Fab size='large'><IconMaterialPottedPlantRounded /></Fab>
            <Fab size='large'>Large</Fab>
          </div>
        </Accordion>

        <Accordion label='Fab loading' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('loading')}>a</Button>

          <div className={classNames([classes.row, classes.center])}>
            <Fab version='text' size='small' loading={a.loading}><IconMaterialPottedPlantRounded /> Small</Fab>
            <Fab version='outlined' size='regular' loading={a.loading}><IconMaterialPottedPlantRounded /></Fab>
            <Fab version='filled' size='large' loading={a.loading}>Large</Fab>
          </div>
        </Accordion>

        <Accordion label='Fab disabled' open>
          <div className={classNames([classes.row, classes.center])}>
            <Fab version='text' size='small' disabled><IconMaterialPottedPlantRounded /> Small</Fab>
            <Fab version='outlined' size='regular' disabled><IconMaterialPottedPlantRounded /></Fab>
            <Fab version='filled' size='large' disabled>Large</Fab>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Icon button'>
        <Accordion label='Icon button' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconButton>
              <IconMaterialPottedPlantRounded />
            </IconButton>
          </div>
        </Accordion>

        <Accordion label='Button versions' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='filled' color='secondary' size='small'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton version='filled' color='secondary' size='regular'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton version='filled' color='secondary' size='large'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton version='filled' color='secondary' size='large' elevation={false}>
              <IconMaterialPottedPlantRounded />
            </IconButton>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton tonal version='filled' color='secondary' size='small'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton tonal version='filled' color='secondary' size='regular'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton tonal version='filled' color='secondary' size='large'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton tonal version='filled' color='secondary' size='large' elevation={false}>
              <IconMaterialPottedPlantRounded />
            </IconButton>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='outlined' color='secondary' size='small'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton version='outlined' color='secondary' size='regular'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton version='outlined' color='secondary' size='large'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton version='outlined' color='secondary' size='large' elevation={false}>
              <IconMaterialPottedPlantRounded />
            </IconButton>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='text' color='secondary' size='small'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton version='text' color='secondary' size='regular'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton version='text' color='secondary' size='large'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
          </div>
        </Accordion>

        <Accordion label='Icon button color' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='text' color='primary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='secondary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='tertiary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='quaternary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='info'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='success'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='error'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='warning'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='neutral'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='#f5d758'><IconMaterialPottedPlantRounded /></IconButton>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='outlined' color='primary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='secondary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='tertiary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='quaternary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='info'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='success'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='error'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='warning'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='neutral'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='#f5d758'><IconMaterialPottedPlantRounded /></IconButton>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='filled' color='primary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='secondary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='tertiary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='quaternary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='info'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='success'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='error'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='warning'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='neutral'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='#f5d758'><IconMaterialPottedPlantRounded /></IconButton>
          </div>
        </Accordion>

        <Accordion label='Icon button color tonal' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconButton tonal version='text' color='primary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='secondary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='tertiary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='quaternary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='info'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='success'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='error'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='warning'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='neutral'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='#f5d758'><IconMaterialPottedPlantRounded /></IconButton>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton tonal version='outlined' color='primary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='secondary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='tertiary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='quaternary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='info'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='success'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='error'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='warning'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='neutral'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='#f5d758'><IconMaterialPottedPlantRounded /></IconButton>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton tonal version='filled' color='primary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='secondary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='tertiary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='quaternary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='info'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='success'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='error'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='warning'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='neutral'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='#f5d758'><IconMaterialPottedPlantRounded /></IconButton>
          </div>
        </Accordion>

        <Accordion label='Button size' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconButton color='secondary' size='small'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton color='secondary' size='regular'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton color='secondary' size='large'><IconMaterialPottedPlantRounded /></IconButton>
          </div>
        </Accordion>

        <Accordion label='Button loading' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('loading')}>a</Button>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='text' color='primary' size='small' loading={a.loading}><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='secondary' size='regular' loading={a.loading}><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='secondary' size='regular' loading={a.loading}><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' tonal color='tertiary' size='large' loading={a.loading}><IconMaterialPottedPlantRounded /></IconButton>
          </div>
        </Accordion>

        <Accordion label='Button disabled' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='text' color='primary' size='small' disabled><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='secondary' size='regular' disabled><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='secondary' size='regular' disabled><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' tonal color='tertiary' size='large' disabled><IconMaterialPottedPlantRounded /></IconButton>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Linear progress'>
        <Accordion label='Linear progress' open>
          <div className={classNames([classes.column, classes.center])}>
            <LinearProgress />
          </div>
        </Accordion>

        <Accordion label='Linear progress versions' open>
          <div className={classNames([classes.column, classes.center])}>
            <LinearProgress />
            <LinearProgress version='indeterminate' />
            <LinearProgress version='determinate' value={progress} />
            <LinearProgress version='determinate' value={{ progress: 24, buffer: 40 }} buffer />
          </div>
        </Accordion>

        <Accordion label='Linear progress colors' open>
          <div className={classNames([classes.column, classes.center])}>
            <LinearProgress color='primary' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='secondary' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='tertiary' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='quaternary' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='info' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='success' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='error' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='warning' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='neutral' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='#f5d758' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
          </div>
        </Accordion>

        <Accordion label='Linear progress determinate with buffer' open>
          <div className={classNames([classes.column, classes.center])}>
            <LinearProgress version='determinate' value={{ buffer: progress + 20, progress: progress }} buffer />
          </div>
        </Accordion>

        <Accordion label='Linear progress reverse' open>
          <div className={classNames([classes.column, classes.center])}>
            <LinearProgress />
            <LinearProgress version='indeterminate' reverse />
            <LinearProgress version='determinate' value={{ progress: 24 }} reverse />
            <LinearProgress version='determinate' value={{ progress: 24, buffer: 40 }} buffer reverse />
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Segmented buttons'>
        <Accordion label='Segmented buttons' open>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons>
              <Button>Button one</Button>
            </SegmentedButtons>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons>
              <Button>Button one</Button>
              <Button>Button two</Button>
            </SegmentedButtons>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
            </SegmentedButtons>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
            </SegmentedButtons>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
              <Button>Button seven</Button>
              <Button>Button fourteen</Button>
            </SegmentedButtons>
          </div>
        </Accordion>

        <Accordion label='Segmented buttons sizes' open>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons size='small' color='secondary' tonal>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </SegmentedButtons>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons size='regular' color='secondary' tonal>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </SegmentedButtons>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons size='large' color='secondary' tonal>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </SegmentedButtons>
          </div>

        </Accordion>

        <Accordion label='Segmented buttons versions' open>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons size='small' color='secondary' version='text'>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </SegmentedButtons>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons size='regular' color='secondary' version='outlined'>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </SegmentedButtons>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons size='large' color='secondary' version='filled'>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </SegmentedButtons>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons size='regular' color='secondary' version='filled' tonal>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </SegmentedButtons>
          </div>

        </Accordion>

        <Accordion label='Segmented buttons no border' open>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons size='small' color='secondary' version='text' border={false}>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </SegmentedButtons>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons size='regular' color='secondary' version='outlined' border={false}>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </SegmentedButtons>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons size='large' color='secondary' version='filled' border={false}>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </SegmentedButtons>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons size='regular' color='secondary' version='filled' border={false} tonal>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </SegmentedButtons>
          </div>

        </Accordion>

        <Accordion label='Segmented buttons with icons' open>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons select='single' size='small' color='secondary' version='text'>
              <Button startIcon={<IconMaterialAddRounded />}>Button one</Button>
              <Button startIcon={<IconMaterialAddRounded />}>Button two</Button>
              <Button startIcon={<IconMaterialAddRounded />}>Button three</Button>
              <Button startIcon={<IconMaterialAddRounded />}>Button four</Button>
              <Button startIcon={<IconMaterialAddRounded />}>Button five</Button>
            </SegmentedButtons>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons select='single' size='regular' color='secondary' version='outlined'>
              <Button endIcon={<IconMaterialAddRounded />}>Button one</Button>
              <Button endIcon={<IconMaterialAddRounded />}>Button two</Button>
              <Button endIcon={<IconMaterialAddRounded />}>Button three</Button>
              <Button endIcon={<IconMaterialAddRounded />}>Button four</Button>
              <Button endIcon={<IconMaterialAddRounded />}>Button five</Button>
            </SegmentedButtons>
          </div >

          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons select='single' size='large' color='secondary' version='filled' tonal>
              <Button startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Button one</Button>
              <Button startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Button two</Button>
              <Button startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Button three</Button>
              <Button startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Button four</Button>
              <Button startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Button five</Button>
            </SegmentedButtons>
          </div >

        </Accordion >

        <Accordion label='Segmented buttons select single' open>
          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons color='secondary' version='filled' select='single' tonal>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
              <Button>Button seven</Button>
              <Button>Button fourteen</Button>
            </SegmentedButtons>
          </div>
        </Accordion>

        <Accordion label='Segmented buttons select multi' open>
          <div className={classNames([classes.row, classes.center])}>
            <SegmentedButtons version='filled' size='large' select='multi'>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
              <Button>Button seven</Button>
              <Button>Button fourteen</Button>
            </SegmentedButtons>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Round progress'>
        <Accordion label='Round progress' open>
          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress />
          </div>
        </Accordion>

        <Accordion label='Round progress size' open>
          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress size='extra_small' />
            <RoundProgress size={20} />
            <RoundProgress size='small' />
            <RoundProgress size='regular' />
            <RoundProgress size='large' />
          </div>
        </Accordion>

        <Accordion label='Round progress color' open>
          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress color='primary' />
            <RoundProgress color='secondary' />
            <RoundProgress color='tertiary' />
            <RoundProgress color='quaternary' />
            <RoundProgress color='info' />
            <RoundProgress color='success' />
            <RoundProgress color='error' />
            <RoundProgress color='warning' />
            <RoundProgress color='neutral' />
            <RoundProgress color='#f5d758' />
          </div>
        </Accordion>

        <Accordion label='Round progress no shrink' open>
          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress size='extra_small' noShrink />
            <RoundProgress size={20} noShrink />
            <RoundProgress size='small' noShrink />
            <RoundProgress size='regular' noShrink />
            <RoundProgress size='large' noShrink />
          </div>
        </Accordion>

        <Accordion label='Round progress thickness' open>
          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress size='extra_small' thickness={1.4} />
            <RoundProgress size={20} thickness={1.4} />
            <RoundProgress size='small' thickness={1.4} />
            <RoundProgress size='regular' thickness={1.4} />
            <RoundProgress size='large' thickness={1.4} />
          </div>
        </Accordion>

        <Accordion label='Rounded progress rounded' open>
          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress size='extra_small' rounded={false} />
            <RoundProgress size={20} rounded={false} />
            <RoundProgress size='small' rounded={false} />
            <RoundProgress size='regular' rounded={false} />
            <RoundProgress size='large' rounded={false} />
          </div>
        </Accordion>

        <Accordion label='Rounded progress deteminate with pathBackgroundProps as well' open>
          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress size='small' version='determinate' value={0} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='small' version='determinate' value={1} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='small' version='determinate' value={40} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='small' version='determinate' value={99} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='small' version='determinate' value={100} pathBackgroundProps={{ className: classes.pathBackground }} />

            <RoundProgress size='small' version='determinate' value={progress} pathBackgroundProps={{ className: classes.pathBackground }} />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress size='regular' version='determinate' value={0} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='regular' version='determinate' value={1} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='regular' version='determinate' value={40} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='regular' version='determinate' value={99} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='regular' version='determinate' value={100} pathBackgroundProps={{ className: classes.pathBackground }} />

            <RoundProgress size='regular' version='determinate' value={progress} pathBackgroundProps={{ className: classes.pathBackground }} />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress size='large' version='determinate' value={0} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='large' version='determinate' value={1} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='large' version='determinate' value={40} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='large' version='determinate' value={99} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='large' version='determinate' value={100} pathBackgroundProps={{ className: classes.pathBackground }} />

            <RoundProgress size='large' version='determinate' value={progress} pathBackgroundProps={{ className: classes.pathBackground }} />
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Button'>
        <Accordion label='Button' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button>Button</Button>
          </div>
        </Accordion>

        <Accordion label='Button versions' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button version='filled' color='secondary' size='small'>Filled</Button>
            <Button version='filled' color='secondary' size='regular'>Filled</Button>
            <Button version='filled' color='secondary' size='large'>Filled</Button>
            <Button version='filled' color='secondary' size='large' elevation={false}>No elevation</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button tonal version='filled' color='secondary' size='small'>Tonal</Button>
            <Button tonal version='filled' color='secondary' size='regular'>Tonal</Button>
            <Button tonal version='filled' color='secondary' size='large'>Tonal</Button>
            <Button tonal version='filled' color='secondary' size='large' elevation={false}>No elevation</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button version='outlined' color='secondary' size='small'>Outlined</Button>
            <Button version='outlined' color='secondary' size='regular'>Outlined</Button>
            <Button version='outlined' color='secondary' size='large'>Outlined</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='secondary' size='small'>Text</Button>
            <Button version='text' color='secondary' size='regular'>Text</Button>
            <Button version='text' color='secondary' size='large'>Text</Button>
          </div>
        </Accordion>

        <Accordion label='Button color' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='primary'>Primary</Button>
            <Button version='text' color='secondary'>Secondary</Button>
            <Button version='text' color='tertiary'>Tertiary</Button>
            <Button version='text' color='quaternary'>Quaternary</Button>
            <Button version='text' color='info'>Info</Button>
            <Button version='text' color='success'>Success</Button>
            <Button version='text' color='error'>Error</Button>
            <Button version='text' color='warning'>Warning</Button>
            <Button version='text' color='neutral'>Neutral</Button>
            <Button version='text' color='#f5d758'>Other</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button version='outlined' color='primary'>Primary</Button>
            <Button version='outlined' color='secondary'>Secondary</Button>
            <Button version='outlined' color='tertiary'>Tertiary</Button>
            <Button version='outlined' color='quaternary'>Quaternary</Button>
            <Button version='outlined' color='info'>Info</Button>
            <Button version='outlined' color='success'>Success</Button>
            <Button version='outlined' color='error'>Error</Button>
            <Button version='outlined' color='warning'>Warning</Button>
            <Button version='outlined' color='neutral'>Neutral</Button>
            <Button version='outlined' color='#f5d758'>Other</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button version='filled' color='primary'>Primary</Button>
            <Button version='filled' color='secondary'>Secondary</Button>
            <Button version='filled' color='tertiary'>Tertiary</Button>
            <Button version='filled' color='quaternary'>Quaternary</Button>
            <Button version='filled' color='info'>Info</Button>
            <Button version='filled' color='success'>Success</Button>
            <Button version='filled' color='error'>Error</Button>
            <Button version='filled' color='warning'>Warning</Button>
            <Button version='filled' color='neutral'>Neutral</Button>
            <Button version='filled' color='#f5d758'>Other</Button>
          </div>
        </Accordion>

        <Accordion label='Button color tonal' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button tonal version='text' color='primary'>Primary</Button>
            <Button tonal version='text' color='secondary'>Secondary</Button>
            <Button tonal version='text' color='tertiary'>Tertiary</Button>
            <Button tonal version='text' color='quaternary'>Quaternary</Button>
            <Button tonal version='text' color='info'>Info</Button>
            <Button tonal version='text' color='success'>Success</Button>
            <Button tonal version='text' color='error'>Error</Button>
            <Button tonal version='text' color='warning'>Warning</Button>
            <Button tonal version='text' color='neutral'>Neutral</Button>
            <Button tonal version='text' color='#f5d758'>Other</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button tonal version='outlined' color='primary'>Primary</Button>
            <Button tonal version='outlined' color='secondary'>Secondary</Button>
            <Button tonal version='outlined' color='tertiary'>Tertiary</Button>
            <Button tonal version='outlined' color='quaternary'>Quaternary</Button>
            <Button tonal version='outlined' color='info'>Info</Button>
            <Button tonal version='outlined' color='success'>Success</Button>
            <Button tonal version='outlined' color='error'>Error</Button>
            <Button tonal version='outlined' color='warning'>Warning</Button>
            <Button tonal version='outlined' color='neutral'>Neutral</Button>
            <Button tonal version='outlined' color='#f5d758'>Other</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button tonal version='filled' color='primary'>Primary</Button>
            <Button tonal version='filled' color='secondary'>Secondary</Button>
            <Button tonal version='filled' color='tertiary'>Tertiary</Button>
            <Button tonal version='filled' color='quaternary'>Quaternary</Button>
            <Button tonal version='filled' color='info'>Info</Button>
            <Button tonal version='filled' color='success'>Success</Button>
            <Button tonal version='filled' color='error'>Error</Button>
            <Button tonal version='filled' color='warning'>Warning</Button>
            <Button tonal version='filled' color='neutral'>Neutral</Button>
            <Button tonal version='filled' color='#f5d758'>Other</Button>
          </div>
        </Accordion>

        <Accordion label='Button size' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button color='secondary' size='small'>Small</Button>
            <Button color='secondary' size='regular'>Regular</Button>
            <Button color='secondary' size='large'>Large</Button>
            <Button color='secondary' size='large' fullWidth>Full width</Button>
          </div>
        </Accordion>

        <Accordion label='Button loading' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('loading')}>a</Button>

          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='primary' size='small' loading={a.loading}>Small</Button>
            <Button version='outlined' color='secondary' size='regular' loading={a.loading}>Regular</Button>
            <Button version='filled' color='secondary' size='regular' loading={a.loading}>Regular</Button>
            <Button version='filled' tonal color='tertiary' size='large' loading={a.loading}>Large</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='primary' size='small' loading={a.loading} loadingLabel='Loading...'>Loading label</Button>
            <Button version='outlined' color='secondary' size='regular' loading={a.loading} loadingLabel='Loading...'>Loading label</Button>
            <Button version='filled' color='secondary' size='regular' loading={a.loading} loadingLabel='Loading...'>Loading label</Button>
            <Button version='filled' tonal color='tertiary' size='large' loading={a.loading} loadingLabel='Loading...'>Loading label</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='primary' size='small' loading={a.loading} loadingIconPosition='start'>Loading start</Button>
            <Button version='outlined' color='secondary' size='regular' loading={a.loading} loadingIconPosition='start'>Loading start</Button>
            <Button version='filled' color='secondary' size='regular' loading={a.loading} loadingIconPosition='start'>Loading start</Button>
            <Button version='filled' tonal color='tertiary' size='large' loading={a.loading} loadingIconPosition='start'>Loading start</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='primary' size='small' loading={a.loading} loadingIconPosition='end'>Loading end</Button>
            <Button version='outlined' color='secondary' size='regular' loading={a.loading} loadingIconPosition='end'>Loading end</Button>
            <Button version='filled' color='secondary' size='regular' loading={a.loading} loadingIconPosition='end'>Loading end</Button>
            <Button version='filled' tonal color='tertiary' size='large' loading={a.loading} loadingIconPosition='end'>Loading end</Button>
          </div>
        </Accordion>

        <Accordion label='Button disabled' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='primary' size='small' disabled>Small</Button>
            <Button version='outlined' color='secondary' size='regular' disabled>Regular</Button>
            <Button version='filled' color='secondary' size='regular' disabled>Regular</Button>
            <Button version='filled' tonal color='tertiary' size='large' disabled>Large</Button>
          </div>
        </Accordion>

        <Accordion label='Button icons' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='secondary' size='small' startIcon={<IconMaterialAddRounded />}>Start icon</Button>
            <Button version='filled' color='warning' size='regular' startIcon={<IconMaterialAddRounded />}>Start icon</Button>
            <Button version='outlined' color='secondary' size='large' startIcon={<IconMaterialAddRounded />}>Start icon</Button>

            <Button version='text' color='secondary' size='small' endIcon={<IconMaterialAddRounded />}>End icon</Button>
            <Button version='filled' color='warning' size='regular' endIcon={<IconMaterialAddRounded />}>End end icon</Button>
            <Button version='outlined' color='secondary' size='large' endIcon={<IconMaterialAddRounded />}>End icon</Button>

            <Button version='outlined' color='warning' size='small' startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Start and end icon</Button>
            <Button version='filled' tonal color='warning' size='regular' startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Start and end icon</Button>
            <Button version='text' color='warning' size='large' startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Start and end icon</Button>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Transitions / Transition'>
        <Accordion label='Fade' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => { update('fade'); }}>a</Button>

          <Fade in={a.fade}>
            <div className={classes.div}>
              a {String(a.fade)}
            </div>
          </Fade>
        </Accordion>

        <Accordion label='Grow' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('grow')}>a</Button>

          <Grow in={a.grow}>
            <div className={classes.div}>
              a {String(a.grow)}
            </div>
          </Grow>

          <Grow in={a.grow}>
            <div className={classes.div} style={{ transformOrigin: '0 0' }}>
              with transform origin {String(a.grow)}
            </div>
          </Grow>
        </Accordion>

        <Accordion label='Zoom' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('zoom')}>a</Button>

          <Zoom in={a.zoom}>
            <div className={classes.div}>
              a {String(a.zoom)}
            </div>
          </Zoom>

          <Zoom in={a.zoom}>
            <div className={classes.div} style={{ transformOrigin: '0 0' }}>
              with transform origin {String(a.zoom)}
            </div>
          </Zoom>
        </Accordion>

        <Accordion label='Expand' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('expand')}>a</Button>

          <Expand in={a.expand}>
            <div className={classes.div}>
              vertical {String(a.expand)}
            </div>
          </Expand>

          <Expand in={a.expand} expandSize='70px'>
            <div className={classes.div}>
              vertical expand size {String(a.expand)}
            </div>
          </Expand>

          <Expand in={a.expand} orientation='horizontal'>
            <div className={classes.div}>
              horizontal {String(a.expand)}
            </div>
          </Expand>

          <Expand in={a.expand} orientation='horizontal' expandSize='70px'>
            <div className={classes.div}>
              horizontal expand size {String(a.expand)}
            </div>
          </Expand>
        </Accordion>

        <Accordion label='Slide' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('slide')}>a</Button>

          <Slide in={a.slide} direction='up'>
            <div className={classes.div}>
              up {String(a.slide)}
            </div>
          </Slide>

          <Slide in={a.slide} direction='left'>
            <div className={classes.div}>
              left {String(a.slide)}
            </div>
          </Slide>

          <Slide in={a.slide} direction='right'>
            <div className={classes.div}>
              right {String(a.slide)}
            </div>
          </Slide>

          <Slide in={a.slide} direction='down'>
            <div className={classes.div}>
              down {String(a.slide)}
            </div>
          </Slide>

          <Slide in={a.slide} direction='down' removeOnExited={false}>
            <div className={classes.div}>
              down without removeOnExited {String(a.slide)}
            </div>
          </Slide>
        </Accordion>

        <Accordion label='Slide relative to root ref' className={classes.row} open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('slideRef')}>a</Button>

          <div className={classes.item} ref={refs.slides.up} style={{ overflow: 'hidden', height: 140 }}>
            <Slide in={a.slideRef} direction='up' root={refs.slides.up?.current}>
              <div className={classes.div}>
                up {String(a.slideRef)}
              </div>
            </Slide>
          </div>

          <div className={classes.item} ref={refs.slides.left} style={{ overflow: 'hidden', height: 140 }}>
            <Slide in={a.slideRef} direction='left' root={refs.slides.left?.current}>
              <div className={classes.div}>
                left {String(a.slideRef)}
              </div>
            </Slide>
          </div>

          <div className={classes.item} ref={refs.slides.right} style={{ overflow: 'hidden', height: 140 }}>
            <Slide in={a.slideRef} direction='right' root={refs.slides.right?.current}>
              <div className={classes.div}>
                right {String(a.slideRef)}
              </div>
            </Slide>
          </div>

          <div className={classes.item} ref={refs.slides.down} style={{ overflow: 'hidden', height: 140 }}>
            <Slide in={a.slideRef} direction='down' root={refs.slides.down?.current}>
              <div className={classes.div}>
                down {String(a.slideRef)}
              </div>
            </Slide>
          </div>

          <div className={classes.item} ref={refs.slides.down} style={{ overflow: 'hidden', height: 140 }}>
            <Slide in={a.slideRef} direction='down' root={refs.slides.down?.current} removeOnExited={false}>
              <div className={classes.div}>
                down without onRemoveExited {String(a.slideRef)}
              </div>
            </Slide>
          </div>
        </Accordion>

        <Accordion label='Transition' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('a')}>a</Button>

          <A in={a.a}>
            <div className={classes.div} />
          </A>
        </Accordion>

        <Accordion label='Transition with switch' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('transitions')}>a</Button>

          <div className={classes.item} style={{ height: 140 }}>
            <Transitions switch>
              <Transition key={a.transitions}>
                <div className={classNames([classes.div, classes.a1])} style={{ position: 'absolute' }}>
                  a {String(a.transitions)}
                </div>
              </Transition>
            </Transitions>
          </div>

          <div className={classes.item} style={{ height: 140 }}>
            <Transitions switch mode='in-out-follow'>
              <Transition key={a.transitions}>
                <div className={classNames([classes.div, classes.a14])} style={{ position: 'absolute' }}>
                  in-out-follow {String(a.transitions)}
                </div>
              </Transition>
            </Transitions>
          </div>

          <div className={classes.item} style={{ height: 140 }}>
            <Transitions switch mode='in-out'>
              <Transition key={a.transitions}>
                <div className={classNames([classes.div, classes.a1])} style={{ position: 'absolute' }}>
                  in-out {String(a.transitions)}
                </div>
              </Transition>
            </Transitions>
          </div>
        </Accordion>

        <Accordion label='Transitions' className={classes.row} open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => setItems(items_ => [...items_, new Date().getTime()])}>a</Button>

          <Transitions>
            {items.map((item, index) => (
              <Transition key={item}>
                <div className={classNames([classes.div, classes.a1])} onClick={() => {
                  setItems(items =>
                    items.filter(i => i !== item)
                  );
                }}>
                  {item}
                </div>
              </Transition>
            ))}
          </Transitions>
        </Accordion>
      </Accordion>

      <Accordion label='Interaction'>
        <Button size='small' color='secondary' className={classes.btn} onClick={() => update('pulse')}>a</Button>

        <div className={classes.a} style={{ color: 'orange' }}>
          <Interaction pulse={a.pulse} />

          <IconMaterial10kRounded />

          <span style={{ position: 'relative' }}>a</span>
        </div>
      </Accordion>
    </div>
  );
}

export default App;
