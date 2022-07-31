import React from 'react';

import { useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';

const Fab = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiFab?.props?.default }), [props_]);

  const {
    tonal = true,
    version = 'filled'
  } = props;

  return (
    <Button
      ref={ref}

      {...props}

      version={version}

      tonal={tonal}

      fab
    />
  );
});

export default Fab;
