import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditCardOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOffRoundedW100Filled'
      short_name='CreditCardOff'

      {...props}
    >
      <path d="M21.05 22.05 17.7 18.7H4.8Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.275 3.588 5.887Q3.875 5.5 4.35 5.35L2.475 3.475Q2.375 3.375 2.375 3.25Q2.375 3.125 2.5 3Q2.625 2.875 2.75 2.875Q2.875 2.875 3 3L21.575 21.575Q21.675 21.675 21.675 21.8Q21.675 21.925 21.55 22.05Q21.425 22.175 21.3 22.175Q21.175 22.175 21.05 22.05ZM20.575 17.775 13.75 10.95H20V9.05H11.85L8.1 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.35 20.663 17.5Q20.625 17.65 20.575 17.775ZM4 10.95H9.95L8.05 9.05H4Z"/>
    </Icon>
  );
});

IconMaterialCreditCardOffRoundedW100Filled.displayName = 'AmauiIconMaterialCreditCardOffRoundedW100Filled';

export default IconMaterialCreditCardOffRoundedW100Filled;
