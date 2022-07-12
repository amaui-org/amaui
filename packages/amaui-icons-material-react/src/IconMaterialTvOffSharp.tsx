import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOffSharp'
      short_name='TvOff'

      {...props}
    >
      <path d="M21.85 19 20 17.15V5H7.85L5.85 3H22V19ZM20.5 23.3 16.2 19H16V21H8V19H2V4.8L0.7 3.5L2.1 2.1L21.9 21.9ZM4 17H14.15L4 6.85ZM9.075 11.925ZM14 11.125Z"/>
    </Icon>
  )
});

export default IconMaterialTvOffSharp;
