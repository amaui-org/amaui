import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMenuTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuTwoTone'
      short_name='Menu'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </Icon>
  )
});

export default IconMaterialMenuTwoTone;
