import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFoodBankRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoodBankRounded'
      short_name='FoodBank'

      {...props}
    >
      <path d="M6 21Q5.175 21 4.588 20.413Q4 19.825 4 19V10Q4 9.525 4.213 9.1Q4.425 8.675 4.8 8.4L10.8 3.9Q11.325 3.5 12 3.5Q12.675 3.5 13.2 3.9L19.2 8.4Q19.575 8.675 19.788 9.1Q20 9.525 20 10V19Q20 19.825 19.413 20.413Q18.825 21 18 21ZM6 19H18V10L12 5.5L6 10ZM10 14V17.5Q10 17.7 10.15 17.85Q10.3 18 10.5 18Q10.7 18 10.85 17.85Q11 17.7 11 17.5V14Q11.625 14 12.062 13.562Q12.5 13.125 12.5 12.5V10Q12.5 9.8 12.35 9.65Q12.2 9.5 12 9.5Q11.8 9.5 11.65 9.65Q11.5 9.8 11.5 10V12.5H11V10Q11 9.8 10.85 9.65Q10.7 9.5 10.5 9.5Q10.3 9.5 10.15 9.65Q10 9.8 10 10V12.5H9.5V10Q9.5 9.8 9.35 9.65Q9.2 9.5 9 9.5Q8.8 9.5 8.65 9.65Q8.5 9.8 8.5 10V12.5Q8.5 13.125 8.938 13.562Q9.375 14 10 14ZM14.5 18Q14.7 18 14.85 17.85Q15 17.7 15 17.5V10.1Q15 9.9 14.85 9.75Q14.7 9.6 14.5 9.6Q13.8 9.6 13.4 10.175Q13 10.75 13 11.5V14Q13 14.2 13.15 14.35Q13.3 14.5 13.5 14.5H14V17.5Q14 17.7 14.15 17.85Q14.3 18 14.5 18ZM6 19H12H18H6Z"/>
    </Icon>
  );
});

IconMaterialFoodBankRounded.displayName = 'AmauiIconMaterialFoodBankRounded';

export default IconMaterialFoodBankRounded;
