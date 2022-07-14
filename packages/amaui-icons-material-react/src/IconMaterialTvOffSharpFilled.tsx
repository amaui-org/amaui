import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOffSharpFilled'
      short_name='TvOff'

      {...props}
    >
      <path d="M21.85 19 5.85 3H22V19ZM20.5 23.3 16.2 19H16V21H8V19H2V4.8L0.7 3.5L2.1 2.1L21.9 21.9Z"/>
    </Icon>
  );
});

export default IconMaterialTvOffSharpFilled;
