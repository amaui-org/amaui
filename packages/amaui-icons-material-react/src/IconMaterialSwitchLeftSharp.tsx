import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchLeftSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchLeftSharp'
      short_name='SwitchLeft'

      {...props}
    >
      <path d="M8.5 15.375V8.625L5.125 12ZM10 19 3 12 10 5ZM14 19V5L21 12Z"/>
    </Icon>
  )
});

export default IconMaterialSwitchLeftSharp;
