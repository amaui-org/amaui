import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSellRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SellRounded'
      short_name='Sell'

      {...props}
    >
      <path d="M12.85 22Q12.425 22 12.05 21.837Q11.675 21.675 11.4 21.4L2.6 12.6Q2.325 12.325 2.163 11.95Q2 11.575 2 11.15V4Q2 3.175 2.588 2.587Q3.175 2 4 2H11.15Q11.575 2 11.95 2.162Q12.325 2.325 12.6 2.6L21.4 11.425Q21.975 12 21.975 12.837Q21.975 13.675 21.4 14.25L14.25 21.4Q13.975 21.675 13.613 21.837Q13.25 22 12.85 22ZM12.825 20 19.975 12.85 11.15 4H4V11.15ZM6.5 8Q7.125 8 7.562 7.562Q8 7.125 8 6.5Q8 5.875 7.562 5.438Q7.125 5 6.5 5Q5.875 5 5.438 5.438Q5 5.875 5 6.5Q5 7.125 5.438 7.562Q5.875 8 6.5 8ZM4 4Z"/>
    </Icon>
  );
});

IconMaterialSellRounded.displayName = 'AmauiIconMaterialSellRounded';

export default IconMaterialSellRounded;
