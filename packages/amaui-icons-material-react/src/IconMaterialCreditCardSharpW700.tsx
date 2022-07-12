import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditCardSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardSharpW700'
      short_name='CreditCard'

      {...props}
    >
      <path d="M1.15 20.85V3.15H22.85V20.85ZM4.3 7.925H19.7V6.3H4.3ZM4.3 11.925V17.7H19.7V11.925ZM4.3 17.7V6.3Z"/>
    </Icon>
  )
});

export default IconMaterialCreditCardSharpW700;
