import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditCardSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardSharp'
      short_name='CreditCard'

      {...props}
    >
      <path d="M2 20V4H22V20ZM4 8H20V6H4ZM4 12V18H20V12ZM4 18V6Z"/>
    </Icon>
  );
});

export default IconMaterialCreditCardSharp;
