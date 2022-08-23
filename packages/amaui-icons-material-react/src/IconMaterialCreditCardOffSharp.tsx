import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditCardOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOffSharp'
      short_name='CreditCardOff'

      {...props}
    >
      <path d="M20.45 23.3 17.15 20H2V5.9V4.85L0.65 3.5L2.075 2.075L21.875 21.875ZM4 12V18H15.15L9.15 12ZM4 8H5.15L4.075 6.925L4 6.85ZM22 4V19.15L20 17.15V12H14.85L10.85 8H20V6H8.85L6.85 4ZM9.625 12.45ZM14.425 11.575Z"/>
    </Icon>
  );
});

IconMaterialCreditCardOffSharp.displayName = 'AmauiIconMaterialCreditCardOffSharp';

export default IconMaterialCreditCardOffSharp;
