import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoMealsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMealsSharp'
      short_name='NoMeals'

      {...props}
    >
      <path d="M20.475 23.3 19 21.825V22H17V19.825L9.75 12.575Q9.575 12.675 9.388 12.737Q9.2 12.8 9 12.85V22H7V12.85Q5.725 12.5 4.863 11.45Q4 10.4 4 9V6.825L0.675 3.5L2.1 2.075L21.9 21.875ZM19 16.125 16.925 14.05 14 11.125V7Q14 4.925 15.463 3.463Q16.925 2 19 2ZM12 9.125 10 7.125V2H12ZM6 9ZM9 6.125 7 4.125V2H9ZM6 3.125 4.875 2H6Z"/>
    </Icon>
  );
});

IconMaterialNoMealsSharp.displayName = 'AmauiIconMaterialNoMealsSharp';

export default IconMaterialNoMealsSharp;
