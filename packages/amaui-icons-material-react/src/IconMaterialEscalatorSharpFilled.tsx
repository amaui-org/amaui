import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEscalatorSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorSharpFilled'
      short_name='Escalator'

      {...props}
    >
      <path d="M5.5 18H10.3L15.3 9H18.5V6H13.7L8.7 15H5.5ZM3 21V3H21V21Z"/>
    </Icon>
  )
});

export default IconMaterialEscalatorSharpFilled;
