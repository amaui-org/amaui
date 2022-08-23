import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTakeoutDiningRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDiningRounded'
      short_name='TakeoutDining'

      {...props}
    >
      <path d="M7.8 18H16.25Q16.25 18 16.25 18Q16.25 18 16.25 18L16.725 11H7.3L7.8 18Q7.8 18 7.8 18Q7.8 18 7.8 18ZM7.15 9H16.875L16.95 7.75L14.15 5Q14.15 5 14.15 5Q14.15 5 14.15 5H9.85Q9.85 5 9.85 5Q9.85 5 9.85 5L7.05 7.75ZM5.25 10.7 2.7 8.15Q2.425 7.875 2.425 7.45Q2.425 7.025 2.7 6.75Q2.975 6.475 3.4 6.475Q3.825 6.475 4.1 6.75L5 7.65L4.95 7.05L8.425 3.575Q8.7 3.3 9.062 3.15Q9.425 3 9.825 3H14.175Q14.575 3 14.938 3.15Q15.3 3.3 15.575 3.575L19.05 7.05L19 7.65L19.9 6.75Q20.175 6.475 20.6 6.475Q21.025 6.475 21.3 6.75Q21.575 7.025 21.575 7.45Q21.575 7.875 21.3 8.15L18.75 10.7ZM7.8 20Q7 20 6.425 19.475Q5.85 18.95 5.8 18.15L5.25 10.7H18.75L18.2 18.15Q18.15 18.95 17.575 19.475Q17 20 16.2 20ZM12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9ZM12.025 11Q12.025 11 12.025 11Q12.025 11 12.025 11Q12.025 11 12.025 11Q12.025 11 12.025 11Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDiningRounded.displayName = 'AmauiIconMaterialTakeoutDiningRounded';

export default IconMaterialTakeoutDiningRounded;
