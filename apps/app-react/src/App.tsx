import React from 'react';

import { style } from '@amaui/style-react';
import { Interaction } from '@amaui/ui-react';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    columnGap: 40
  },
  item: {
    display: 'block'
  },
  a: {
    position: 'relative',
    width: '90px',
    height: '37px',
    background: 'white',
    color: 'green',
  },
  div: {
    width: 400,
    height: 400
  }
}));

function App() {
  const [inProp, setInProp] = React.useState(true);
  const { classes } = useStyle();

  React.useEffect(() => {
    setInProp(false);
  }, []);

  return (
    <div className={classes?.root}>
      <section className={classes?.item}>
        <button onClick={() => setInProp(in_ => !in_)}>asd</button>

        <div className={classes?.a} style={{ color: 'orange' }}>
          <Interaction pulse={inProp} />

          <span style={{ position: 'relative' }}>a</span>
        </div>
      </section>

      <section className={classes?.item}>
        <button onClick={() => setInProp(in_ => !in_)}>asd</button>

        <div className={classes?.a} style={{ color: 'orange' }}>
          <Interaction pulse={inProp} />

          <span style={{ position: 'relative' }}>a</span>
        </div>
      </section>

      <section className={classes?.item}>
        <button onClick={() => setInProp(in_ => !in_)}>asd</button>

        <div className={classes?.a} style={{ color: 'orange' }}>
          <Interaction pulse={inProp} />

          <span style={{ position: 'relative' }}>a</span>
        </div>
      </section>

      <section className={classes?.item}>
        <button onClick={() => setInProp(in_ => !in_)}>asd</button>

        <div className={classes?.a} style={{ color: 'orange' }}>
          <Interaction pulse={inProp} />

          <span style={{ position: 'relative' }}>a</span>
        </div>
      </section>
    </div>
  );
}

export default App;
