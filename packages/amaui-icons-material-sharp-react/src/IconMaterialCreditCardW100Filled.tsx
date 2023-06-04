import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardW100Filled'

      short_name='CreditCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4Zm.7-7.75h16v-1.9H4Z"/>
    </Icon>
  );
});

IconMaterialCreditCardW100Filled.displayName = 'AmauiIconMaterialCreditCardW100Filled';

export default IconMaterialCreditCardW100Filled;
