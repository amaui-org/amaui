import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditCardSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardSharpW100Filled'
      short_name='CreditCard'

      {...props}
    >
      <path d="M3.3 18.7V5.3H20.7V18.7ZM4 10.95H20V9.05H4Z"/>
    </Icon>
  )
});

export default IconMaterialCreditCardSharpW100Filled;
