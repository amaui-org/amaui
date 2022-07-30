import React from 'react';

import { useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';

const Fab = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiFab?.props?.default }), [props_]);

  return (
    <Button
      ref={ref}

      {...props}

      version={props.version || 'filled'}

      tonal={props.tonal !== undefined ? props.tonal : true}

      fab
    />
  );
});

export default Fab;
