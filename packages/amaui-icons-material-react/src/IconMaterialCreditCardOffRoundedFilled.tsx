import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditCardOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOffRoundedFilled'
      short_name='CreditCardOff'

      {...props}
    >
      <path d="M19.75 22.575 17.15 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.75 2.05 5.512Q2.1 5.275 2.225 5.075L1.35 4.2Q1.075 3.925 1.075 3.5Q1.075 3.075 1.375 2.775Q1.675 2.475 2.087 2.475Q2.5 2.475 2.8 2.775L21.175 21.175Q21.45 21.45 21.463 21.862Q21.475 22.275 21.175 22.575Q20.875 22.875 20.462 22.875Q20.05 22.875 19.75 22.575ZM21.775 18.925 14.85 12H20V8H10.85L6.85 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.25 21.95 18.488Q21.9 18.725 21.775 18.925ZM4 12H9.15L5.15 8H4Z"/>
    </Icon>
  );
});

IconMaterialCreditCardOffRoundedFilled.displayName = 'AmauiIconMaterialCreditCardOffRoundedFilled';

export default IconMaterialCreditCardOffRoundedFilled;
