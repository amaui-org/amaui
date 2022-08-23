import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoyaltyRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoyaltyRoundedFilled'
      short_name='Loyalty'

      {...props}
    >
      <path d="M13 17.075Q13.2 17.075 13.375 17.012Q13.55 16.95 13.7 16.8L16.5 14Q16.775 13.725 16.938 13.35Q17.1 12.975 17.1 12.55Q17.1 11.7 16.5 11.1Q15.9 10.5 15.05 10.5Q14.575 10.5 14.113 10.775Q13.65 11.05 13 11.7Q12.25 11 11.825 10.75Q11.4 10.5 10.95 10.5Q10.1 10.5 9.5 11.1Q8.9 11.7 8.9 12.55Q8.9 12.975 9.062 13.35Q9.225 13.725 9.5 14L12.3 16.8Q12.45 16.95 12.625 17.012Q12.8 17.075 13 17.075ZM12.85 22Q12.425 22 12.05 21.837Q11.675 21.675 11.4 21.4L2.6 12.6Q2.325 12.325 2.163 11.95Q2 11.575 2 11.15V4Q2 3.175 2.588 2.587Q3.175 2 4 2H11.15Q11.575 2 11.95 2.162Q12.325 2.325 12.6 2.6L21.4 11.425Q21.975 12 21.975 12.837Q21.975 13.675 21.4 14.25L14.25 21.4Q13.975 21.675 13.613 21.837Q13.25 22 12.85 22ZM6.5 8Q7.125 8 7.562 7.562Q8 7.125 8 6.5Q8 5.875 7.562 5.438Q7.125 5 6.5 5Q5.875 5 5.438 5.438Q5 5.875 5 6.5Q5 7.125 5.438 7.562Q5.875 8 6.5 8Z"/>
    </Icon>
  );
});

IconMaterialLoyaltyRoundedFilled.displayName = 'AmauiIconMaterialLoyaltyRoundedFilled';

export default IconMaterialLoyaltyRoundedFilled;
