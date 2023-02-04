import { style } from '@amaui/style-react';
import React from 'react';

import IFrame from '../../ui/IFrame';

const useStyle = style(theme => ({
  root: {
    color: 'green'
  }
}), { name: 'zip-example-zip' });

const zip = React.forwardRef((props: any, ref: any) => {
  const { classes } = useStyle();

  return (
    <IFrame
      ref={ref}
    >
      <p
        className={classes.root}
      >
        zip
      </p>
    </IFrame>
  );
});

export default zip;
