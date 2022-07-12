import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBoltSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoltSharp'
      short_name='Bolt'

      {...props}
    >
      <path d="M10 21 11 14H6.725L13 3H14L13 10H17.275L11 21Z"/>
    </Icon>
  )
});

export default IconMaterialBoltSharp;
