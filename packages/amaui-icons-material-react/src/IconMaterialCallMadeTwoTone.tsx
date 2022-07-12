import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMadeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMadeTwoTone'
      short_name='CallMade'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5.41 20L17 8.41V15h2V5H9v2h6.59L4 18.59z"/>
    </Icon>
  )
});

export default IconMaterialCallMadeTwoTone;
