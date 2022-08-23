import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountBoxRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxRoundedFilled'
      short_name='AccountBox'

      {...props}
    >
      <path d="M5 17.85Q6.35 16.525 8.138 15.762Q9.925 15 12 15Q14.075 15 15.863 15.762Q17.65 16.525 19 17.85V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5ZM12 13Q10.55 13 9.525 11.975Q8.5 10.95 8.5 9.5Q8.5 8.05 9.525 7.025Q10.55 6 12 6Q13.45 6 14.475 7.025Q15.5 8.05 15.5 9.5Q15.5 10.95 14.475 11.975Q13.45 13 12 13ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxRoundedFilled.displayName = 'AmauiIconMaterialAccountBoxRoundedFilled';

export default IconMaterialAccountBoxRoundedFilled;
