import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditCardOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOffSharpFilled'
      short_name='CreditCardOff'

      {...props}
    >
      <path d="M20.45 23.3 17.15 20H2V4.85L0.65 3.5L2.075 2.075L21.875 21.875ZM22 19.15 14.85 12H20V8H10.85L6.85 4H22ZM4 12H9.15L5.15 8H4Z"/>
    </Icon>
  );
});

IconMaterialCreditCardOffSharpFilled.displayName = 'AmauiIconMaterialCreditCardOffSharpFilled';

export default IconMaterialCreditCardOffSharpFilled;
