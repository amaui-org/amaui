import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBreakfastDiningRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreakfastDiningRounded'
      short_name='BreakfastDining'

      {...props}
    >
      <path d="M6 21Q5.175 21 4.588 20.413Q4 19.825 4 19V10.45Q3.075 9.9 2.538 8.987Q2 8.075 2 7Q2 5.35 3.175 4.175Q4.35 3 6 3H18Q19.65 3 20.825 4.175Q22 5.35 22 7Q22 8.075 21.462 8.987Q20.925 9.9 20 10.45V19Q20 19.825 19.413 20.413Q18.825 21 18 21ZM6 19H18V9.3L19 8.7Q19.45 8.425 19.725 7.975Q20 7.525 20 7Q20 6.175 19.413 5.588Q18.825 5 18 5H6Q5.175 5 4.588 5.588Q4 6.175 4 7Q4 7.55 4.263 8.012Q4.525 8.475 5 8.75L6 9.3ZM11.3 16.7Q11.6 16.975 12.013 16.975Q12.425 16.975 12.7 16.7L15.7 13.7Q16 13.4 16 12.987Q16 12.575 15.7 12.3L12.7 9.3Q12.425 9 12.013 9Q11.6 9 11.3 9.3L8.3 12.3Q8.025 12.575 8.025 12.987Q8.025 13.4 8.3 13.7ZM12 14.6 10.4 13 12 11.4 13.6 13ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialBreakfastDiningRounded.displayName = 'AmauiIconMaterialBreakfastDiningRounded';

export default IconMaterialBreakfastDiningRounded;
