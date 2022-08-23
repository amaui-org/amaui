import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShoppingBagRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBagRoundedW100Filled'
      short_name='ShoppingBag'

      {...props}
    >
      <path d="M9 11Q9.15 11 9.25 10.9Q9.35 10.8 9.35 10.65V8H8.65V10.65Q8.65 10.8 8.75 10.9Q8.85 11 9 11ZM9.35 6.65V7.3H14.65V6.65Q14.65 5.525 13.887 4.762Q13.125 4 12 4Q10.875 4 10.113 4.762Q9.35 5.525 9.35 6.65ZM15 11Q15.15 11 15.25 10.9Q15.35 10.8 15.35 10.65V8H14.65V10.65Q14.65 10.8 14.75 10.9Q14.85 11 15 11ZM6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V8.8Q5.3 8.15 5.725 7.725Q6.15 7.3 6.8 7.3H8.65V6.65Q8.65 5.25 9.625 4.275Q10.6 3.3 12 3.3Q13.4 3.3 14.375 4.275Q15.35 5.25 15.35 6.65V7.3H17.2Q17.85 7.3 18.275 7.725Q18.7 8.15 18.7 8.8V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7Z"/>
    </Icon>
  );
});

IconMaterialShoppingBagRoundedW100Filled.displayName = 'AmauiIconMaterialShoppingBagRoundedW100Filled';

export default IconMaterialShoppingBagRoundedW100Filled;
