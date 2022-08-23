import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoMealsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMealsRounded'
      short_name='NoMeals'

      {...props}
    >
      <path d="M20.475 23.3 18.2 21.025H19Q19 21.45 18.712 21.737Q18.425 22.025 18 22.025Q17.575 22.025 17.288 21.737Q17 21.45 17 21.025V19.825L9.75 12.575Q9.575 12.675 9.388 12.737Q9.2 12.8 9 12.85V21Q9 21.425 8.713 21.712Q8.425 22 8 22Q7.575 22 7.287 21.712Q7 21.425 7 21V12.85Q5.725 12.5 4.863 11.45Q4 10.4 4 9V6.825L0.675 3.5L2.1 2.075L21.9 21.875ZM19 16.125 16.925 14.05 14 11.125V7Q14 4.925 15.463 3.463Q16.925 2 19 2ZM12 9.125 10 7.125V3Q10 2.575 10.288 2.287Q10.575 2 11 2Q11.425 2 11.713 2.287Q12 2.575 12 3ZM6 9ZM9 6.125 7 4.125V3Q7 2.575 7.287 2.287Q7.575 2 8 2Q8.425 2 8.713 2.287Q9 2.575 9 3ZM6 3.125 4.875 2Q5.35 2 5.675 2.325Q6 2.65 6 3.125Z"/>
    </Icon>
  );
});

IconMaterialNoMealsRounded.displayName = 'AmauiIconMaterialNoMealsRounded';

export default IconMaterialNoMealsRounded;
