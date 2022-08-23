import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBreakfastDiningSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreakfastDiningSharp'
      short_name='BreakfastDining'

      {...props}
    >
      <path d="M4 21V10.45Q3.075 9.9 2.538 8.987Q2 8.075 2 7Q2 5.35 3.175 4.175Q4.35 3 6 3H18Q19.65 3 20.825 4.175Q22 5.35 22 7Q22 8.075 21.462 8.987Q20.925 9.9 20 10.45V21ZM6 19H18V9.3L19 8.7Q19.45 8.425 19.725 7.975Q20 7.525 20 7Q20 6.175 19.413 5.588Q18.825 5 18 5H6Q5.175 5 4.588 5.588Q4 6.175 4 7Q4 7.55 4.263 8.012Q4.525 8.475 5 8.75L6 9.3ZM12 17.4 16.4 13 12 8.6 7.6 13ZM12 14.6 10.4 13 12 11.4 13.6 13ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialBreakfastDiningSharp.displayName = 'AmauiIconMaterialBreakfastDiningSharp';

export default IconMaterialBreakfastDiningSharp;
