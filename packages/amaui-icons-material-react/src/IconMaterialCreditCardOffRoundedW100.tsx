import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditCardOffRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOffRoundedW100'
      short_name='CreditCardOff'

      {...props}
    >
      <path d="M21.05 22.05 17.7 18.7H4.8Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.275 3.588 5.887Q3.875 5.5 4.35 5.35L2.475 3.475Q2.375 3.375 2.388 3.237Q2.4 3.1 2.5 3Q2.625 2.875 2.75 2.875Q2.875 2.875 3 3L21.575 21.575Q21.675 21.675 21.663 21.812Q21.65 21.95 21.55 22.05Q21.425 22.175 21.3 22.175Q21.175 22.175 21.05 22.05ZM4.8 18H17L9.95 10.95H4V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18ZM4 9.05H8.05L5 6H4.8Q4.45 6 4.225 6.225Q4 6.45 4 6.8ZM20.575 17.775 20 17.2V10.95H13.75L11.85 9.05H20V6.8Q20 6.45 19.775 6.225Q19.55 6 19.2 6H8.8L8.1 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.35 20.663 17.5Q20.625 17.65 20.575 17.775ZM11 12Q11 12 11 12Q11 12 11 12Q11 12 11 12Q11 12 11 12ZM14.4 11.6Q14.4 11.6 14.4 11.6Q14.4 11.6 14.4 11.6Z"/>
    </Icon>
  );
});

IconMaterialCreditCardOffRoundedW100.displayName = 'AmauiIconMaterialCreditCardOffRoundedW100';

export default IconMaterialCreditCardOffRoundedW100;
