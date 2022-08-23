import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFoodBankSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoodBankSharp'
      short_name='FoodBank'

      {...props}
    >
      <path d="M4 21V9L12 3L20 9V21ZM6 19H18V10L12 5.5L6 10ZM10 18H11V14Q11.625 14 12.062 13.562Q12.5 13.125 12.5 12.5V9.5H11.5V12.5H11V9.5H10V12.5H9.5V9.5H8.5V12.5Q8.5 13.125 8.938 13.562Q9.375 14 10 14ZM14 18H15V9.5Q14.175 9.5 13.588 10.087Q13 10.675 13 11.5V14.5H14ZM6 19H12H18H6Z"/>
    </Icon>
  );
});

IconMaterialFoodBankSharp.displayName = 'AmauiIconMaterialFoodBankSharp';

export default IconMaterialFoodBankSharp;
