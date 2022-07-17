import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';
import { Button, Expand, Fade, Grow, Interaction, Reset, RoundProgress, Slide, Transition, Transitions, Zoom } from '@amaui/ui-react';
import IconMaterial10kRounded from '@amaui/icons-material-react/build/IconMaterial10kRounded';
import IconMaterialAddRounded from '@amaui/icons-material-react/build/IconMaterialAddRounded';

const useStyleA = style(theme => ({
  a: {
    '&.a-enter': {
      opacity: 0,
    },

    '&.a-entering': {
      opacity: 1,
      transition: theme?.methods.transitions.make(['opacity'], { duration: 'rg', timing_function: 'standard' }),
    },

    '&.a-exit': {
      opacity: 1,
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
    gap: 40,
    padding: '271px 140px',
  },
  group: {
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
    marginBottom: 24
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  center: {
    alignItems: 'center'
  },
  item: {
    display: 'block',
    position: 'relative'
  },
  btn: {
    marginBottom: 11,
    transition: 'transform .4s ease',

    '&:active': {
      transform: 'scale(0.91)'
    }
  },
  div: {
    width: 140,
    height: 140,
    background: '#fff5dc'
  },
  h1: {
    fontSize: 15,
    marginBottom: 15,
    fontWeight: 300,
    color: theme?.palette.text?.default?.primary
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
    stroke: theme?.palette?.text?.selected
  }
}), { name: 'App' });

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
    loading: true
  });
  const [roundedProgress, setRoundedProgress] = React.useState(0);
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

  const amauiTheme = useAmauiTheme();

  const updateTheme = () => amauiTheme.updateWithRerender({
    palette: {
      light: !amauiTheme.palette.light
    }
  });

  const update = (item: any) => {
    setA((values: any) => {
      const newValues = { ...values };

      newValues[item] = !newValues[item];

      return newValues;
    });
  };

  React.useEffect(() => {
    const id = setInterval(() => setRoundedProgress(item => item >= 100 ? 0 : item + 10), 1000);

    return () => {
      clearInterval(id);
    }
  }, []);

  // React.useEffect(() => {
  //   const rect = refs.transitions.current.getBoundingClientRect();

  //   window.scrollBy(0, Math.abs(window.innerHeight - rect.y - rect.height) * 2);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [items.length]);

  return (
    <div className={classes.root}>
      {/* Reset */}
      <Reset />

      {/* Interaction */}
      <div className={classes.group}>
        <Button size='small' color='secondary' className={classes.btn} onClick={() => updateTheme()}>{amauiTheme.palette.light ? 'dark' : 'light'}</Button>
      </div>

      {/* Interaction */}
      <div className={classes.group}>
        <section className={classes.item}>
          <h1 className={classes.h1}>Interaction</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('pulse')}>a</Button>

          <div className={classes.a} style={{ color: 'orange' }}>
            <Interaction pulse={a.pulse} />

            <IconMaterial10kRounded />

            <span style={{ position: 'relative' }}>a</span>
          </div>
        </section>
      </div>

      <div>
        {/* Buttons versions */}
        <h1 className={classes.h1} style={{ marginBottom: 24 }}>Button versions</h1>

        <div className={classNames([classes.group, classes.center])}>
          <Button version='filled' color='secondary' size='small'>Filled</Button>
          <Button version='filled' color='secondary' size='regular'>Filled</Button>
          <Button version='filled' color='secondary' size='large'>Filled</Button>
          <Button version='filled' color='secondary' size='large' elevation={false}>No elevation</Button>
        </div>

        <div className={classNames([classes.group, classes.center])}>
          <Button version='tonal' color='secondary' size='small'>Tonal</Button>
          <Button version='tonal' color='secondary' size='regular'>Tonal</Button>
          <Button version='tonal' color='secondary' size='large'>Tonal</Button>
          <Button version='tonal' color='secondary' size='large' elevation={false}>No elevation</Button>
        </div>

        <div className={classNames([classes.group, classes.center])}>
          <Button version='outlined' color='secondary' size='small'>Outlined</Button>
          <Button version='outlined' color='secondary' size='regular'>Outlined</Button>
          <Button version='outlined' color='secondary' size='large'>Outlined</Button>
        </div>

        <div className={classNames([classes.group, classes.center])}>
          <Button version='text' color='secondary' size='small'>Text</Button>
          <Button version='text' color='secondary' size='regular'>Text</Button>
          <Button version='text' color='secondary' size='large'>Text</Button>
        </div>
      </div>

      <div>
        {/* Buttons color */}
        <h1 className={classes.h1} style={{ marginBottom: 24 }}>Button colors</h1>

        <div className={classNames([classes.group, classes.center])}>
          <Button color='primary'>Primary</Button>
          <Button color='secondary'>Secondary</Button>
          <Button color='tertiary'>Tertiary</Button>
          <Button color='quaternary'>Quaternary</Button>
          <Button color='info'>Info</Button>
          <Button color='success'>Success</Button>
          <Button color='error'>Error</Button>
          <Button color='warning'>Warning</Button>
          <Button color='neutral'>Neutral</Button>
          <Button color='#f5d758'>Other</Button>
        </div>
      </div>

      <div>
        {/* Buttons size */}
        <h1 className={classes.h1} style={{ marginBottom: 24 }}>Button sizes</h1>

        <div className={classNames([classes.group, classes.center])}>
          <Button color='secondary' size='small'>Small</Button>
          <Button color='secondary' size='regular'>Regular</Button>
          <Button color='secondary' size='large'>Large</Button>
          <Button color='secondary' size='large' fullWidth>Full width</Button>
        </div>
      </div>

      <div>
        {/* Buttons loading */}
        <h1 className={classes.h1} style={{ marginBottom: 24 }}>Button loading</h1>

        <Button size='small' color='secondary' className={classes.btn} onClick={() => update('loading')}>a</Button>

        <div className={classNames([classes.group, classes.center])}>
          <Button version='text' color='primary' size='small' loading={a.loading}>Small</Button>
          <Button version='outlined' color='secondary' size='regular' loading={a.loading}>Regular</Button>
          <Button version='filled' color='secondary' size='regular' loading={a.loading}>Regular</Button>
          <Button version='tonal' color='tertiary' size='large' loading={a.loading}>Large</Button>
        </div>

        <div className={classNames([classes.group, classes.center])}>
          <Button version='text' color='primary' size='small' loading={a.loading} loadingLabel='Loading...'>Loading label</Button>
          <Button version='outlined' color='secondary' size='regular' loading={a.loading} loadingLabel='Loading...'>Loading label</Button>
          <Button version='filled' color='secondary' size='regular' loading={a.loading} loadingLabel='Loading...'>Loading label</Button>
          <Button version='tonal' color='tertiary' size='large' loading={a.loading} loadingLabel='Loading...'>Loading label</Button>
        </div>

        <div className={classNames([classes.group, classes.center])}>
          <Button version='text' color='primary' size='small' loading={a.loading} loadingIconPosition='start'>Loading start</Button>
          <Button version='outlined' color='secondary' size='regular' loading={a.loading} loadingIconPosition='start'>Loading start</Button>
          <Button version='filled' color='secondary' size='regular' loading={a.loading} loadingIconPosition='start'>Loading start</Button>
          <Button version='tonal' color='tertiary' size='large' loading={a.loading} loadingIconPosition='start'>Loading start</Button>
        </div>

        <div className={classNames([classes.group, classes.center])}>
          <Button version='text' color='primary' size='small' loading={a.loading} loadingIconPosition='end'>Loading end</Button>
          <Button version='outlined' color='secondary' size='regular' loading={a.loading} loadingIconPosition='end'>Loading end</Button>
          <Button version='filled' color='secondary' size='regular' loading={a.loading} loadingIconPosition='end'>Loading end</Button>
          <Button version='tonal' color='tertiary' size='large' loading={a.loading} loadingIconPosition='end'>Loading end</Button>
        </div>
      </div>

      <div>
        {/* Buttons disabled */}
        <h1 className={classes.h1} style={{ marginBottom: 24 }}>Button disabled</h1>

        <div className={classNames([classes.group, classes.center])}>
          <Button version='text' color='primary' size='small' disabled>Small</Button>
          <Button version='outlined' color='secondary' size='regular' disabled>Regular</Button>
          <Button version='filled' color='secondary' size='regular' disabled>Regular</Button>
          <Button version='tonal' color='tertiary' size='large' disabled>Large</Button>
        </div>
      </div>

      <div>
        {/* Buttons icons  */}
        <h1 className={classes.h1} style={{ marginBottom: 24 }}>Button with icons</h1>

        <div className={classNames([classes.group, classes.center])}>
          <Button version='text' color='secondary' size='small' startIcon={<IconMaterialAddRounded />}>Start icon</Button>
          <Button version='filled' color='warning' size='regular' startIcon={<IconMaterialAddRounded />}>Start icon</Button>
          <Button version='outlined' color='secondary' size='large' startIcon={<IconMaterialAddRounded />}>Start icon</Button>

          <Button version='text' color='secondary' size='small' endIcon={<IconMaterialAddRounded />}>End icon</Button>
          <Button version='filled' color='warning' size='regular' endIcon={<IconMaterialAddRounded />}>End end icon</Button>
          <Button version='outlined' color='secondary' size='large' endIcon={<IconMaterialAddRounded />}>End icon</Button>

          <Button version='outlined' color='warning' size='small' startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Start and end icon</Button>
          <Button version='tonal' color='warning' size='regular' startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Start and end icon</Button>
          <Button version='text' color='warning' size='large' startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Start and end icon</Button>
        </div>
      </div>

      <div>
        <h1 className={classes.h1} style={{ marginBottom: 24 }}>Round progress size</h1>

        <div className={classNames([classes.group, classes.center])}>
          <RoundProgress size='extra_small' />
          <RoundProgress size={20} />
          <RoundProgress size='small' />
          <RoundProgress size='regular' />
          <RoundProgress size='large' />
        </div>
      </div>

      <div>
        <h1 className={classes.h1} style={{ marginBottom: 24 }}>Round progress color</h1>

        <div className={classNames([classes.group, classes.center])}>
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
      </div>

      <div>
        <h1 className={classes.h1} style={{ marginBottom: 24 }}>No shrink</h1>

        <div className={classNames([classes.group, classes.center])}>
          <RoundProgress size='extra_small' noShrink />
          <RoundProgress size={20} noShrink />
          <RoundProgress size='small' noShrink />
          <RoundProgress size='regular' noShrink />
          <RoundProgress size='large' noShrink />
        </div>
      </div>

      <div>
        <h1 className={classes.h1} style={{ marginBottom: 24 }}>Thickness</h1>

        <div className={classNames([classes.group, classes.center])}>
          <RoundProgress size='extra_small' thickness={1.4} />
          <RoundProgress size={20} thickness={1.4} />
          <RoundProgress size='small' thickness={1.4} />
          <RoundProgress size='regular' thickness={1.4} />
          <RoundProgress size='large' thickness={1.4} />
        </div>
      </div>

      <div>
        <h1 className={classes.h1} style={{ marginBottom: 24 }}>Rounded</h1>

        <div className={classNames([classes.group, classes.center])}>
          <RoundProgress size='extra_small' rounded={false} />
          <RoundProgress size={20} rounded={false} />
          <RoundProgress size='small' rounded={false} />
          <RoundProgress size='regular' rounded={false} />
          <RoundProgress size='large' rounded={false} />
        </div>
      </div>

      <div>
        <h1 className={classes.h1} style={{ marginBottom: 24 }}>Deteminate with pathBackgroundProps as well</h1>

        <div className={classNames([classes.group, classes.center])}>
          <RoundProgress size='small' version='determinate' value={0} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='small' version='determinate' value={1} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='small' version='determinate' value={40} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='small' version='determinate' value={99} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='small' version='determinate' value={100} pathBackgroundProps={{ className: classes.pathBackground }} />

          <RoundProgress size='small' version='determinate' value={roundedProgress} pathBackgroundProps={{ className: classes.pathBackground }} />
        </div>

        <div className={classNames([classes.group, classes.center])}>
          <RoundProgress size='regular' version='determinate' value={0} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='regular' version='determinate' value={1} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='regular' version='determinate' value={40} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='regular' version='determinate' value={99} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='regular' version='determinate' value={100} pathBackgroundProps={{ className: classes.pathBackground }} />

          <RoundProgress size='regular' version='determinate' value={roundedProgress} pathBackgroundProps={{ className: classes.pathBackground }} />
        </div>

        <div className={classNames([classes.group, classes.center])}>
          <RoundProgress size='large' version='determinate' value={0} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='large' version='determinate' value={1} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='large' version='determinate' value={40} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='large' version='determinate' value={99} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='large' version='determinate' value={100} pathBackgroundProps={{ className: classes.pathBackground }} />

          <RoundProgress size='large' version='determinate' value={roundedProgress} pathBackgroundProps={{ className: classes.pathBackground }} />
        </div>
      </div>

      {/* Fade */}
      <div className={classes.group}>
        <section className={classes.item}>
          <h1 className={classes.h1}>Fade</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => { update('fade'); }}>a</Button>

          <Fade in={a.fade}>
            <div className={classes.div}>
              a {String(a.fade)}
            </div>
          </Fade>
        </section>
      </div>

      {/* Grow */}
      <div className={classes.group}>
        <section className={classes.item}>
          <h1 className={classes.h1}>Grow</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('grow')}>a</Button>

          <Grow in={a.grow}>
            <div className={classes.div}>
              a {String(a.grow)}
            </div>
          </Grow>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Grow with transform origin</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('grow')}>a</Button>

          <Grow in={a.grow}>
            <div className={classes.div} style={{ transformOrigin: '0 0' }}>
              a {String(a.grow)}
            </div>
          </Grow>
        </section>
      </div>

      {/* Zoom */}
      <div className={classes.group}>
        <section className={classes.item}>
          <h1 className={classes.h1}>Zoom</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('zoom')}>a</Button>

          <Zoom in={a.zoom}>
            <div className={classes.div}>
              a {String(a.zoom)}
            </div>
          </Zoom>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Zoom with transform origin</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('zoom')}>a</Button>

          <Zoom in={a.zoom}>
            <div className={classes.div} style={{ transformOrigin: '0 0' }}>
              a {String(a.zoom)}
            </div>
          </Zoom>
        </section>
      </div>

      {/* Expand */}
      <div className={classes.group}>

        <section className={classes.item}>
          <h1 className={classes.h1}>Expand</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('expand')}>a</Button>

          <Expand in={a.expand}>
            <div className={classes.div}>
              a {String(a.expand)}
            </div>
          </Expand>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Expand with expandSize</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('expand')}>a</Button>

          <Expand in={a.expand} expandSize='70px'>
            <div className={classes.div}>
              a {String(a.expand)}
            </div>
          </Expand>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Expand with orientation horizontal</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('expand')}>a</Button>

          <Expand in={a.expand} orientation='horizontal'>
            <div className={classes.div}>
              a {String(a.expand)}
            </div>
          </Expand>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Expand with orientation horizontal and expandSize</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('expand')}>a</Button>

          <Expand in={a.expand} orientation='horizontal' expandSize='70px'>
            <div className={classes.div}>
              a {String(a.expand)}
            </div>
          </Expand>
        </section>

      </div>

      {/* Slide */}
      <div className={classes.group}>

        <section className={classes.item}>
          <h1 className={classes.h1}>Slide up</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('slide')}>a</Button>

          <Slide in={a.slide} direction='up'>
            <div className={classes.div}>
              a {String(a.slide)}
            </div>
          </Slide>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Slide left</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('slide')}>a</Button>

          <Slide in={a.slide} direction='left'>
            <div className={classes.div}>
              a {String(a.slide)}
            </div>
          </Slide>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Slide right</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('slide')}>a</Button>

          <Slide in={a.slide} direction='right'>
            <div className={classes.div}>
              a {String(a.slide)}
            </div>
          </Slide>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Slide down</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('slide')}>a</Button>

          <Slide in={a.slide} direction='down'>
            <div className={classes.div}>
              a {String(a.slide)}
            </div>
          </Slide>
        </section>

      </div>

      {/* Slide relative to root ref */}
      <div className={classes.group}>

        <section className={classes.item} ref={refs.slides.up} style={{ overflow: 'hidden', height: 400 }}>
          <h1 className={classes.h1}>Slide up relative to root ref</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('slide')}>a</Button>

          <Slide in={a.slide} direction='up' root={refs.slides.up?.current}>
            <div className={classes.div}>
              a {String(a.slide)}
            </div>
          </Slide>
        </section>

        <section className={classes.item} ref={refs.slides.left} style={{ overflow: 'hidden', height: 400 }}>
          <h1 className={classes.h1}>Slide left relative to root ref</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('slide')}>a</Button>

          <Slide in={a.slide} direction='left' root={refs.slides.left?.current}>
            <div className={classes.div}>
              a {String(a.slide)}
            </div>
          </Slide>
        </section>

        <section className={classes.item} ref={refs.slides.right} style={{ overflow: 'hidden', height: 400 }}>
          <h1 className={classes.h1}>Slide right relative to root ref</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('slide')}>a</Button>

          <Slide in={a.slide} direction='right' root={refs.slides.right?.current}>
            <div className={classes.div}>
              a {String(a.slide)}
            </div>
          </Slide>
        </section>

        <section className={classes.item} ref={refs.slides.down} style={{ overflow: 'hidden', height: 400 }}>
          <h1 className={classes.h1}>Slide down relative to root ref</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('slide')}>a</Button>

          <Slide in={a.slide} direction='down' root={refs.slides.down?.current}>
            <div className={classes.div}>
              a {String(a.slide)}
            </div>
          </Slide>
        </section>

      </div>

      {/* Transition */}
      <div className={classes.group}>
        <section className={classes.item}>
          <h1 className={classes.h1}>Transition</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('a')}>a</Button>

          <A in={a.a}>
            <div className={classes.div} />
          </A>
        </section>
      </div>

      {/* Transitions with switch */}
      <div className={classNames([classes.group, classes.column])}>
        <section className={classes.item} style={{ height: 224 }}>
          <h1 className={classes.h1}>Transitions mode switch</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('transitions')}>a</Button>

          <Transitions switch>
            <Transition key={a.transitions}>
              <div className={classNames([classes.div, classes.a1])} style={{ position: 'absolute' }}>
                a {String(a.transitions)}
              </div>
            </Transition>
          </Transitions>
        </section>

        <section className={classes.item} style={{ height: 224 }}>
          <h1 className={classes.h1}>Transitions mode switch out-in-follow</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('transitions')}>a</Button>

          <Transitions switch mode='in-out-follow'>
            <Transition key={a.transitions}>
              <div className={classNames([classes.div, classes.a14])} style={{ position: 'absolute' }}>
                a {String(a.transitions)}
              </div>
            </Transition>
          </Transitions>
        </section>

        <section className={classes.item} style={{ height: 224 }}>
          <h1 className={classes.h1}>Transitions mode switch in-out</h1>

          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('transitions')}>a</Button>

          <Transitions switch mode='in-out'>
            <Transition key={a.transitions}>
              <div className={classNames([classes.div, classes.a1])} style={{ position: 'absolute' }}>
                a {String(a.transitions)}
              </div>
            </Transition>
          </Transitions>
        </section>
      </div>

      {/* Transitions */}
      <div className={classes.group} ref={refs.transitions}>
        <section className={classes.item}>
          <h1 className={classes.h1}>Transitions</h1>

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
        </section>
      </div>
    </div>
  );
}

export default App;
