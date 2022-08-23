import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSellRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SellRoundedW100'
      short_name='Sell'

      {...props}
    >
      <path d="M12.85 20.7Q12.725 20.7 12.588 20.65Q12.45 20.6 12.35 20.5L3.55 11.7Q3.425 11.575 3.363 11.438Q3.3 11.3 3.3 11.15V4Q3.3 3.725 3.513 3.512Q3.725 3.3 4 3.3H11.15Q11.275 3.3 11.413 3.35Q11.55 3.4 11.65 3.5L20.45 12.3Q20.675 12.525 20.688 12.837Q20.7 13.15 20.5 13.35L13.35 20.5Q13.25 20.6 13.113 20.65Q12.975 20.7 12.85 20.7ZM12.85 20 20 12.85 11.15 4H4V11.15ZM6.5 7.35Q6.85 7.35 7.1 7.1Q7.35 6.85 7.35 6.5Q7.35 6.15 7.1 5.9Q6.85 5.65 6.5 5.65Q6.15 5.65 5.9 5.9Q5.65 6.15 5.65 6.5Q5.65 6.85 5.9 7.1Q6.15 7.35 6.5 7.35ZM4 4Z"/>
    </Icon>
  );
});

IconMaterialSellRoundedW100.displayName = 'AmauiIconMaterialSellRoundedW100';

export default IconMaterialSellRoundedW100;
