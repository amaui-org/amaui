import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditCardSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardSharpW100'
      short_name='CreditCard'

      {...props}
    >
      <path d="M3.3 18.7V5.3H20.7V18.7ZM4 9.05H20V6H4ZM4 10.95V18H20V10.95ZM4 18V6Z"/>
    </Icon>
  );
});

IconMaterialCreditCardSharpW100.displayName = 'AmauiIconMaterialCreditCardSharpW100';

export default IconMaterialCreditCardSharpW100;
