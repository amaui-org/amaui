import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditCardSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardSharpFilled'
      short_name='CreditCard'

      {...props}
    >
      <path d="M2 20V4H22V20ZM4 12H20V8H4Z"/>
    </Icon>
  )
});

export default IconMaterialCreditCardSharpFilled;
