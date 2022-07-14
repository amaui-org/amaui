import React from 'react';

import { style } from '@amaui/style-react';
import { Interaction, Reset } from '@amaui/ui-react';
import IconMaterialPottedPlantRounded from '@amaui/icons-material-react/build/IconMaterialPottedPlantRounded';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 24,
    padding: 140
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
  console.log(1, classes);
  return (
    <div className={classes.root}>
      <Reset />

      <section className={classes.item}>
        <button onClick={() => setInProp(in_ => !in_)}>asd</button>

        <div className={classes.a} style={{ color: 'orange' }}>
          <Interaction pulse={inProp} />

          <IconMaterialPottedPlantRounded />

          <IconMaterialPottedPlantRounded />

          <span style={{ position: 'relative' }}>a</span>
        </div>
      </section>

      <section className={classes.item}>
        <button onClick={() => setInProp(in_ => !in_)}>asd</button>

        <div className={classes.a} style={{ color: 'orange' }}>
          <Interaction pulse={inProp} />

          <span style={{ position: 'relative' }}>a</span>
        </div>
      </section>
    </div>
  );
}

export default App;
