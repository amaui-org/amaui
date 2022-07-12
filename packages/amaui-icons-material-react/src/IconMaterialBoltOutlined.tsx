import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBoltOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoltOutlined'
      short_name='Bolt'

      {...props}
    >
      <path d="M10 21 11 14H7.5Q7.125 14 7.037 13.8Q6.95 13.6 7.15 13.25L13 3H14L13 10H16.5Q16.875 10 16.962 10.2Q17.05 10.4 16.85 10.75L11 21Z"/>
    </Icon>
  )
});

export default IconMaterialBoltOutlined;
