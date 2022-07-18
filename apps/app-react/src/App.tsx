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
    padding: '271px 140px',
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
    gap: 24
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  },
  center: {
    alignItems: 'center'
  },
  btn: {
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
  },

  group: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  },

}), { name: 'App' });

const Accordion = (props: any) => {
  const { classes } = useStyle();
  const [open, setOpen] = React.useState(false);

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

  // React.useEffect(() => {
  //   const id = setInterval(() => setRoundedProgress(item => item>= 100 ? 0 : item + 10), 1000);

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
        <Button size='small' color='secondary' className={classes.btn} onClick={() => updateTheme()}>{amauiTheme.palette.light ? 'dark' : 'light'}</Button>
      </div>

      <Accordion label='Interaction'>
        <Button size='small' color='secondary' className={classes.btn} onClick={() => update('pulse')}>a</Button>

        <div className={classes.a} style={{ color: 'orange' }}>
          <Interaction pulse={a.pulse} />

          <IconMaterial10kRounded />

          <span style={{ position: 'relative' }}>a</span>
        </div>
      </Accordion>

      <Accordion label='Button versions'>
        <div className={classNames([classes.row, classes.center])}>
          <Button version='filled' color='secondary' size='small'>Filled</Button>
          <Button version='filled' color='secondary' size='regular'>Filled</Button>
          <Button version='filled' color='secondary' size='large'>Filled</Button>
          <Button version='filled' color='secondary' size='large' elevation={false}>No elevation</Button>
        </div>

        <div className={classNames([classes.row, classes.center])}>
          <Button version='tonal' color='secondary' size='small'>Tonal</Button>
          <Button version='tonal' color='secondary' size='regular'>Tonal</Button>
          <Button version='tonal' color='secondary' size='large'>Tonal</Button>
          <Button version='tonal' color='secondary' size='large' elevation={false}>No elevation</Button>
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

      <Accordion label='Button color'>
        <div className={classNames([classes.row, classes.center])}>
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
          <Button version='tonal' color='#f5d758'>Tonal with new color</Button>
        </div>
      </Accordion>

      <Accordion label='Button size'>
        <div className={classNames([classes.row, classes.center])}>
          <Button color='secondary' size='small'>Small</Button>
          <Button color='secondary' size='regular'>Regular</Button>
          <Button color='secondary' size='large'>Large</Button>
          <Button color='secondary' size='large' fullWidth>Full width</Button>
        </div>
      </Accordion>

      <Accordion label='Button loading'>
        <Button size='small' color='secondary' className={classes.btn} onClick={() => update('loading')}>a</Button>

        <div className={classNames([classes.row, classes.center])}>
          <Button version='text' color='primary' size='small' loading={a.loading}>Small</Button>
          <Button version='outlined' color='secondary' size='regular' loading={a.loading}>Regular</Button>
          <Button version='filled' color='secondary' size='regular' loading={a.loading}>Regular</Button>
          <Button version='tonal' color='tertiary' size='large' loading={a.loading}>Large</Button>
        </div>

        <div className={classNames([classes.row, classes.center])}>
          <Button version='text' color='primary' size='small' loading={a.loading} loadingLabel='Loading...'>Loading label</Button>
          <Button version='outlined' color='secondary' size='regular' loading={a.loading} loadingLabel='Loading...'>Loading label</Button>
          <Button version='filled' color='secondary' size='regular' loading={a.loading} loadingLabel='Loading...'>Loading label</Button>
          <Button version='tonal' color='tertiary' size='large' loading={a.loading} loadingLabel='Loading...'>Loading label</Button>
        </div>

        <div className={classNames([classes.row, classes.center])}>
          <Button version='text' color='primary' size='small' loading={a.loading} loadingIconPosition='start'>Loading start</Button>
          <Button version='outlined' color='secondary' size='regular' loading={a.loading} loadingIconPosition='start'>Loading start</Button>
          <Button version='filled' color='secondary' size='regular' loading={a.loading} loadingIconPosition='start'>Loading start</Button>
          <Button version='tonal' color='tertiary' size='large' loading={a.loading} loadingIconPosition='start'>Loading start</Button>
        </div>

        <div className={classNames([classes.row, classes.center])}>
          <Button version='text' color='primary' size='small' loading={a.loading} loadingIconPosition='end'>Loading end</Button>
          <Button version='outlined' color='secondary' size='regular' loading={a.loading} loadingIconPosition='end'>Loading end</Button>
          <Button version='filled' color='secondary' size='regular' loading={a.loading} loadingIconPosition='end'>Loading end</Button>
          <Button version='tonal' color='tertiary' size='large' loading={a.loading} loadingIconPosition='end'>Loading end</Button>
        </div>
      </Accordion>

      <Accordion label='Button disabled'>
        <div className={classNames([classes.row, classes.center])}>
          <Button version='text' color='primary' size='small' disabled>Small</Button>
          <Button version='outlined' color='secondary' size='regular' disabled>Regular</Button>
          <Button version='filled' color='secondary' size='regular' disabled>Regular</Button>
          <Button version='tonal' color='tertiary' size='large' disabled>Large</Button>
        </div>
      </Accordion>

      <Accordion label='Button icons'>
        <div className={classNames([classes.row, classes.center])}>
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
      </Accordion>

      <Accordion label='Round progress size'>
        <div className={classNames([classes.row, classes.center])}>
          <RoundProgress size='extra_small' />
          <RoundProgress size={20} />
          <RoundProgress size='small' />
          <RoundProgress size='regular' />
          <RoundProgress size='large' />
        </div>
      </Accordion>

      <Accordion label='Round progress color'>
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

      <Accordion label='Round progress no shrink'>
        <div className={classNames([classes.row, classes.center])}>
          <RoundProgress size='extra_small' noShrink />
          <RoundProgress size={20} noShrink />
          <RoundProgress size='small' noShrink />
          <RoundProgress size='regular' noShrink />
          <RoundProgress size='large' noShrink />
        </div>
      </Accordion>

      <Accordion label='Round progress thickness'>
        <div className={classNames([classes.row, classes.center])}>
          <RoundProgress size='extra_small' thickness={1.4} />
          <RoundProgress size={20} thickness={1.4} />
          <RoundProgress size='small' thickness={1.4} />
          <RoundProgress size='regular' thickness={1.4} />
          <RoundProgress size='large' thickness={1.4} />
        </div>
      </Accordion>

      <Accordion label='Rounded progress rounded'>
        <div className={classNames([classes.row, classes.center])}>
          <RoundProgress size='extra_small' rounded={false} />
          <RoundProgress size={20} rounded={false} />
          <RoundProgress size='small' rounded={false} />
          <RoundProgress size='regular' rounded={false} />
          <RoundProgress size='large' rounded={false} />
        </div>
      </Accordion>

      <Accordion label='Rounded progress deteminate with pathBackgroundProps as well'>
        <div className={classNames([classes.row, classes.center])}>
          <RoundProgress size='small' version='determinate' value={0} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='small' version='determinate' value={1} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='small' version='determinate' value={40} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='small' version='determinate' value={99} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='small' version='determinate' value={100} pathBackgroundProps={{ className: classes.pathBackground }} />

          <RoundProgress size='small' version='determinate' value={roundedProgress} pathBackgroundProps={{ className: classes.pathBackground }} />
        </div>

        <div className={classNames([classes.row, classes.center])}>
          <RoundProgress size='regular' version='determinate' value={0} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='regular' version='determinate' value={1} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='regular' version='determinate' value={40} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='regular' version='determinate' value={99} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='regular' version='determinate' value={100} pathBackgroundProps={{ className: classes.pathBackground }} />

          <RoundProgress size='regular' version='determinate' value={roundedProgress} pathBackgroundProps={{ className: classes.pathBackground }} />
        </div>

        <div className={classNames([classes.row, classes.center])}>
          <RoundProgress size='large' version='determinate' value={0} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='large' version='determinate' value={1} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='large' version='determinate' value={40} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='large' version='determinate' value={99} pathBackgroundProps={{ className: classes.pathBackground }} />
          <RoundProgress size='large' version='determinate' value={100} pathBackgroundProps={{ className: classes.pathBackground }} />

          <RoundProgress size='large' version='determinate' value={roundedProgress} pathBackgroundProps={{ className: classes.pathBackground }} />
        </div>
      </Accordion>

      <Accordion label='Fade'>
        <Button size='small' color='secondary' className={classes.btn} onClick={() => { update('fade'); }}>a</Button>

        <Fade in={a.fade}>
          <div className={classes.div}>
            a {String(a.fade)}
          </div>
        </Fade>
      </Accordion>

      <Accordion label='Grow'>
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

      <Accordion label='Zoom'>
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

      <Accordion label='Expand'>
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

      <Accordion label='Slide'>
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

      <Accordion label='Slide relative to root ref' className={classes.row}>
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

      <Accordion label='Transition'>
        <Button size='small' color='secondary' className={classes.btn} onClick={() => update('a')}>a</Button>

        <A in={a.a}>
          <div className={classes.div} />
        </A>
      </Accordion>

      <Accordion label='Transition with switch'>
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

      <Accordion label='Transitions' className={classes.row}>
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
    </div>
  );
}

export default App;
