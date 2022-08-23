import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoyaltySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoyaltySharp'
      short_name='Loyalty'

      {...props}
    >
      <path d="M13 17.5 16.5 14Q16.775 13.725 16.938 13.35Q17.1 12.975 17.1 12.55Q17.1 11.7 16.5 11.1Q15.9 10.5 15.05 10.5Q14.575 10.5 14.113 10.775Q13.65 11.05 13 11.7Q12.25 11 11.825 10.75Q11.4 10.5 10.95 10.5Q10.1 10.5 9.5 11.1Q8.9 11.7 8.9 12.55Q8.9 12.975 9.062 13.35Q9.225 13.725 9.5 14ZM12.825 22.825 2 12V2H12L22.8 12.85ZM12.825 20 19.975 12.85 11.15 4H4V11.15ZM6.5 8Q7.125 8 7.562 7.562Q8 7.125 8 6.5Q8 5.875 7.562 5.438Q7.125 5 6.5 5Q5.875 5 5.438 5.438Q5 5.875 5 6.5Q5 7.125 5.438 7.562Q5.875 8 6.5 8ZM4 4Z"/>
    </Icon>
  );
});

IconMaterialLoyaltySharp.displayName = 'AmauiIconMaterialLoyaltySharp';

export default IconMaterialLoyaltySharp;
