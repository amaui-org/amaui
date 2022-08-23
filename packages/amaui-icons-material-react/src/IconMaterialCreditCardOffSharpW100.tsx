import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditCardOffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOffSharpW100'
      short_name='CreditCardOff'

      {...props}
    >
      <path d="M21.3 22.3 17.7 18.7H3.3V5.3H4.3L2.25 3.25L2.75 2.75L21.8 21.8ZM4 10.95V18H17L9.95 10.95ZM4 9.05H8.05L5 6H4ZM20.7 5.3V17.9L20 17.2V10.95H13.75L11.85 9.05H20V6H8.8L8.1 5.3ZM11 12ZM14.4 11.6Z"/>
    </Icon>
  );
});

IconMaterialCreditCardOffSharpW100.displayName = 'AmauiIconMaterialCreditCardOffSharpW100';

export default IconMaterialCreditCardOffSharpW100;
