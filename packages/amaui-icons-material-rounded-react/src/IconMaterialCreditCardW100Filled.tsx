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
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425ZM4 9.05v1.9h16v-1.9Z"/>
    </Icon>
  );
});

IconMaterialCreditCardW100Filled.displayName = 'AmauiIconMaterialCreditCardW100Filled';

export default IconMaterialCreditCardW100Filled;
