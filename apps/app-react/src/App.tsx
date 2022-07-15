import React from 'react';

import { classNames, style } from '@amaui/style-react';
import { Expand, Fade, Grow, Interaction, Reset, Slide, Transition, Transitions, Zoom } from '@amaui/ui-react';
import IconMaterial10kRounded from '@amaui/icons-material-react/build/IconMaterial10kRounded';

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
}));

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
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    padding: '271px 140px'
  },
  group: {
    display: 'flex',
    flexDirection: 'row',
    gap: 40
  },
  column: {
    flexDirection: 'column'
  },
  item: {
    display: 'block',
    position: 'relative'
  },
  btn: {
    padding: '7px 24px',
    border: '1px solid currentColor',
    color: '#a3d986',
    lineHeight: 1,
    borderRadius: 44,
    marginBottom: 11,
    cursor: 'pointer',
    transition: 'transform .4s ease',

    '&:active': {
      transform: 'scale(0.91)'
    }
  },
  div: {
    width: 140,
    height: 140,
    background: '#fbeecd'
  },
  h1: {
    fontSize: 15,
    marginBottom: 15,
    fontWeight: 300
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
  }
}));

function App() {
  const [a, setA] = React.useState<any>({
    a: true,
    transitions: true,
    pulse: true,
    fade: true,
    grow: true,
    zoom: true,
    expand: true,
    slide: true
  });
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

  const update = (item: any) => {
    setA((values: any) => {
      const newValues = { ...values };

      newValues[item] = !newValues[item];

      return newValues;
    });
  };

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
        <section className={classes.item}>
          <h1 className={classes.h1}>Interaction</h1>

          <button className={classes.btn} onClick={() => update('pulse')}>a</button>

          <div className={classes.a} style={{ color: 'orange' }}>
            <Interaction pulse={a.pulse} />

            <IconMaterial10kRounded />

            <span style={{ position: 'relative' }}>a</span>
          </div>
        </section>
      </div>

      {/* Fade */}
      <div className={classes.group}>
        <section className={classes.item}>
          <h1 className={classes.h1}>Fade</h1>

          <button className={classes.btn} onClick={() => { update('fade'); }}>a</button>

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

          <button className={classes.btn} onClick={() => update('grow')}>a</button>

          <Grow in={a.grow}>
            <div className={classes.div}>
              a {String(a.grow)}
            </div>
          </Grow>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Grow with transform origin</h1>

          <button className={classes.btn} onClick={() => update('grow')}>a</button>

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

          <button className={classes.btn} onClick={() => update('zoom')}>a</button>

          <Zoom in={a.zoom}>
            <div className={classes.div}>
              a {String(a.zoom)}
            </div>
          </Zoom>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Zoom with transform origin</h1>

          <button className={classes.btn} onClick={() => update('zoom')}>a</button>

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

          <button className={classes.btn} onClick={() => update('expand')}>a</button>

          <Expand in={a.expand}>
            <div className={classes.div}>
              a {String(a.expand)}
            </div>
          </Expand>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Expand with expandSize</h1>

          <button className={classes.btn} onClick={() => update('expand')}>a</button>

          <Expand in={a.expand} expandSize='70px'>
            <div className={classes.div}>
              a {String(a.expand)}
            </div>
          </Expand>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Expand with orientation horizontal</h1>

          <button className={classes.btn} onClick={() => update('expand')}>a</button>

          <Expand in={a.expand} orientation='horizontal'>
            <div className={classes.div}>
              a {String(a.expand)}
            </div>
          </Expand>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Expand with orientation horizontal and expandSize</h1>

          <button className={classes.btn} onClick={() => update('expand')}>a</button>

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

          <button className={classes.btn} onClick={() => update('slide')}>a</button>

          <Slide in={a.slide} direction='up'>
            <div className={classes.div}>
              a {String(a.slide)}
            </div>
          </Slide>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Slide left</h1>

          <button className={classes.btn} onClick={() => update('slide')}>a</button>

          <Slide in={a.slide} direction='left'>
            <div className={classes.div}>
              a {String(a.slide)}
            </div>
          </Slide>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Slide right</h1>

          <button className={classes.btn} onClick={() => update('slide')}>a</button>

          <Slide in={a.slide} direction='right'>
            <div className={classes.div}>
              a {String(a.slide)}
            </div>
          </Slide>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Slide down</h1>

          <button className={classes.btn} onClick={() => update('slide')}>a</button>

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

          <button className={classes.btn} onClick={() => update('slide')}>a</button>

          <Slide in={a.slide} direction='up' root={refs.slides.up?.current}>
            <div className={classes.div}>
              a {String(a.slide)}
            </div>
          </Slide>
        </section>

        <section className={classes.item} ref={refs.slides.left} style={{ overflow: 'hidden', height: 400 }}>
          <h1 className={classes.h1}>Slide left relative to root ref</h1>

          <button className={classes.btn} onClick={() => update('slide')}>a</button>

          <Slide in={a.slide} direction='left' root={refs.slides.left?.current}>
            <div className={classes.div}>
              a {String(a.slide)}
            </div>
          </Slide>
        </section>

        <section className={classes.item} ref={refs.slides.right} style={{ overflow: 'hidden', height: 400 }}>
          <h1 className={classes.h1}>Slide right relative to root ref</h1>

          <button className={classes.btn} onClick={() => update('slide')}>a</button>

          <Slide in={a.slide} direction='right' root={refs.slides.right?.current}>
            <div className={classes.div}>
              a {String(a.slide)}
            </div>
          </Slide>
        </section>

        <section className={classes.item} ref={refs.slides.down} style={{ overflow: 'hidden', height: 400 }}>
          <h1 className={classes.h1}>Slide down relative to root ref</h1>

          <button className={classes.btn} onClick={() => update('slide')}>a</button>

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

          <button className={classes.btn} onClick={() => update('a')}>a</button>

          <A in={a.a}>
            <div className={classes.div} />
          </A>
        </section>
      </div>

      {/* Transitions with switch */}
      <div className={classNames([classes.group, classes.column])}>
        <section className={classes.item}>
          <h1 className={classes.h1}>Transitions mode switch</h1>

          <button className={classes.btn} onClick={() => update('transitions')}>a</button>

          <Transitions switch>
            <Transition key={a.transitions}>
              <div className={classNames([classes.div, classes.a1])}>
                a {String(a.transitions)}
              </div>
            </Transition>
          </Transitions>
        </section>

        <section className={classes.item}>
          <h1 className={classes.h1}>Transitions mode switch in-out</h1>

          <button className={classes.btn} onClick={() => update('transitions')}>a</button>

          <Transitions switch mode='in-out'>
            <Transition key={a.transitions}>
              <div className={classNames([classes.div, classes.a1])}>
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

          <button className={classes.btn} onClick={() => setItems(items_ => [...items_, new Date().getTime()])}>a</button>

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
