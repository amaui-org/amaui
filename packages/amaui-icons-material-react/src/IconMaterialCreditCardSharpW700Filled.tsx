import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditCardSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardSharpW700Filled'
      short_name='CreditCard'

      {...props}
    >
      <path d="M1.15 20.85V3.15H22.85V20.85ZM4.3 11.925H19.7V7.925H4.3Z"/>
    </Icon>
  )
});

export default IconMaterialCreditCardSharpW700Filled;
