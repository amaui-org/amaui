import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEscalatorSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorSharp'
      short_name='Escalator'

      {...props}
    >
      <path d="M5.5 18H10.3L15.3 9H18.5V6H13.7L8.7 15H5.5ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  )
});

export default IconMaterialEscalatorSharp;
