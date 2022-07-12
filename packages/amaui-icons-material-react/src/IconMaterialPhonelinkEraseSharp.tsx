import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhonelinkEraseSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkEraseSharp'
      short_name='PhonelinkErase'

      {...props}
    >
      <path d="M14.4 16 13 14.6 15.6 12 13 9.4 14.4 8 17 10.6 19.6 8 21 9.4 18.4 12 21 14.6 19.6 16 17 13.4ZM6 21H16V20H6ZM6 4H16V3H6ZM4 23V1H18V7H16V6H6V18H16V17H18V23ZM6 4V3V4ZM6 21V20V21Z"/>
    </Icon>
  )
});

export default IconMaterialPhonelinkEraseSharp;
