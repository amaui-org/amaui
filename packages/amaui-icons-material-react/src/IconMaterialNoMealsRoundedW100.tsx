import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoMealsRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMealsRoundedW100'
      short_name='NoMeals'

      {...props}
    >
      <path d="M21.3 22.3 17.35 18.35V21Q17.35 21.15 17.25 21.25Q17.15 21.35 17 21.35Q16.85 21.35 16.75 21.25Q16.65 21.15 16.65 21V17.65L10.325 11.325Q9.95 11.75 9.438 12.025Q8.925 12.3 8.35 12.35V21Q8.35 21.15 8.25 21.25Q8.15 21.35 8 21.35Q7.85 21.35 7.75 21.25Q7.65 21.15 7.65 21V12.35Q6.525 12.225 5.738 11.387Q4.95 10.55 4.95 9.3V5.95L2.25 3.25L2.75 2.75L21.8 21.8ZM17.35 14.55 16.65 13.85V13.35H16.15L14.35 11.55V7Q14.35 5.45 15.138 4.212Q15.925 2.975 17.35 2.7ZM11.05 8.25 10.35 7.55V3Q10.35 2.85 10.45 2.75Q10.55 2.65 10.7 2.65Q10.85 2.65 10.95 2.75Q11.05 2.85 11.05 3ZM5.65 9.3H7.65V8.65L5.65 6.65ZM8.35 5.55 7.65 4.85V3Q7.65 2.85 7.75 2.75Q7.85 2.65 8 2.65Q8.15 2.65 8.25 2.75Q8.35 2.85 8.35 3ZM5.65 2.85 5.45 2.65Q5.525 2.65 5.588 2.712Q5.65 2.775 5.65 2.85Z"/>
    </Icon>
  );
});

IconMaterialNoMealsRoundedW100.displayName = 'AmauiIconMaterialNoMealsRoundedW100';

export default IconMaterialNoMealsRoundedW100;
