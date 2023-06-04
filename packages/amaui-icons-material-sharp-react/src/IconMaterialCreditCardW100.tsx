import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardW100'

      short_name='CreditCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4ZM4 9.05h16V6H4Zm0 1.9V18h16v-7.05ZM4 18V6Z"/>
    </Icon>
  );
});

IconMaterialCreditCardW100.displayName = 'AmauiIconMaterialCreditCardW100';

export default IconMaterialCreditCardW100;
