import React from 'react';

import { style } from '@amaui/style-react';
import { Interaction } from '@amaui/ui-react';
import IconMaterialPottedPlantRounded from '@amaui/icons-material-react/IconMaterialPottedPlantRounded';

const useStyle = style(theme => ({
  a: {
    position: 'relative',
    width: '90px',
    height: '37px',
    background: 'white',
    color: 'green',
  }
}));

function App() {
  const [inProp, setInProp] = React.useState(true);
  const styles = useStyle();

  React.useEffect(() => {
    setInProp(false);
  }, []);

  return (
    <div>
      <button onClick={() => setInProp(in_ => !in_)}>asd</button>

      <div className={styles.class} style={{ color: 'orange' }}>
        <Interaction pulse={inProp} />

        <IconMaterialPottedPlantRounded />

        <span style={{ position: 'relative' }}>a</span>
      </div>
    </div>
  );
}

export default App;
