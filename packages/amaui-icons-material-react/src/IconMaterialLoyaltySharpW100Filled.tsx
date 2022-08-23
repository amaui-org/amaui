import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoyaltySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoyaltySharpW100Filled'
      short_name='Loyalty'

      {...props}
    >
      <path d="M13 16.75 15.9 13.7Q16.1 13.5 16.2 13.238Q16.3 12.975 16.3 12.65Q16.3 12.075 15.888 11.637Q15.475 11.2 14.9 11.2Q14.4 11.2 13.925 11.45Q13.45 11.7 13 12.35Q12.55 11.7 12.075 11.45Q11.6 11.2 11.1 11.2Q10.525 11.2 10.113 11.637Q9.7 12.075 9.7 12.65Q9.7 12.975 9.8 13.238Q9.9 13.5 10.1 13.7ZM12.85 21 3.3 11.45V3.3H11.45L21 12.85ZM6.5 7.35Q6.85 7.35 7.1 7.1Q7.35 6.85 7.35 6.5Q7.35 6.15 7.1 5.9Q6.85 5.65 6.5 5.65Q6.15 5.65 5.9 5.9Q5.65 6.15 5.65 6.5Q5.65 6.85 5.9 7.1Q6.15 7.35 6.5 7.35Z"/>
    </Icon>
  );
});

IconMaterialLoyaltySharpW100Filled.displayName = 'AmauiIconMaterialLoyaltySharpW100Filled';

export default IconMaterialLoyaltySharpW100Filled;
