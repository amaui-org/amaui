import React from 'react';

import { style } from '@amaui/style-react';
import { Expand, Fade, Grow, Interaction, Reset, Slide, Zoom } from '@amaui/ui-react';
import { IconMaterial10kRounded } from '@amaui/icons-material-react';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    padding: 140
  },
  group: {
    display: 'flex',
    flexDirection: 'row',
    gap: 40
  },
  item: {
    display: 'block'
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
    background: 'orange'
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
}));

function App() {
  const [a, setA] = React.useState<any>({
    pulse: true,
    fade: true,
    grow: true,
    zoom: true,
    expand: true,
    slide: true
  });
  const { classes } = useStyle();

  const update = (item: any) => {
    setA((values: any) => {
      const newValues = { ...values };

      newValues[item] = !newValues[item];

      return newValues;
    });
  };

  return (
    <div className={classes.root}>
      <Reset />

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

        <section className={classes.item}>
          <h1 className={classes.h1}>Fade</h1>

          <button className={classes.btn} onClick={() => { update('fade'); }}>a</button>

          <Fade in={a.fade}>
            <div className={classes.div}>
              a {String(a.fade)}
            </div>
          </Fade>
        </section>

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
          <h1 className={classes.h1}>Zoom</h1>

          <button className={classes.btn} onClick={() => update('zoom')}>a</button>

          <Zoom in={a.zoom}>
            <div className={classes.div}>
              a {String(a.zoom)}
            </div>
          </Zoom>
        </section>

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
          <h1 className={classes.h1}>Slide</h1>

          <button className={classes.btn} onClick={() => update('slide')}>a</button>

          <Slide in={a.slide}>
            <div className={classes.div}>
              a {String(a.slide)}
            </div>
          </Slide>
        </section>
      </div>
    </div>
  );
}

export default App;
