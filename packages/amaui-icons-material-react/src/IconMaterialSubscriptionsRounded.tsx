import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubscriptionsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptionsRounded'
      short_name='Subscriptions'

      {...props}
    >
      <path d="M8 4Q7.575 4 7.287 3.712Q7 3.425 7 3Q7 2.575 7.287 2.287Q7.575 2 8 2H16Q16.425 2 16.712 2.287Q17 2.575 17 3Q17 3.425 16.712 3.712Q16.425 4 16 4ZM5 7Q4.575 7 4.287 6.713Q4 6.425 4 6Q4 5.575 4.287 5.287Q4.575 5 5 5H19Q19.425 5 19.712 5.287Q20 5.575 20 6Q20 6.425 19.712 6.713Q19.425 7 19 7ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V10Q2 9.175 2.588 8.587Q3.175 8 4 8H20Q20.825 8 21.413 8.587Q22 9.175 22 10V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM4 20H20Q20 20 20 20Q20 20 20 20V10Q20 10 20 10Q20 10 20 10H4Q4 10 4 10Q4 10 4 10V20Q4 20 4 20Q4 20 4 20ZM11.55 17.975 14.75 15.825Q15.2 15.525 15.2 15Q15.2 14.475 14.75 14.175L11.55 12.025Q11.05 11.675 10.525 11.975Q10 12.275 10 12.875V17.125Q10 17.725 10.525 18.025Q11.05 18.325 11.55 17.975ZM4 10Q4 10 4 10Q4 10 4 10V20Q4 20 4 20Q4 20 4 20Q4 20 4 20Q4 20 4 20V10Q4 10 4 10Q4 10 4 10Z"/>
    </Icon>
  );
});

IconMaterialSubscriptionsRounded.displayName = 'AmauiIconMaterialSubscriptionsRounded';

export default IconMaterialSubscriptionsRounded;
