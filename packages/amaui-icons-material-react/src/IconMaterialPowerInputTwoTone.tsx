import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerInputTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerInputTwoTone'
      short_name='PowerInput'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z"/>
    </Icon>
  )
});

export default IconMaterialPowerInputTwoTone;
