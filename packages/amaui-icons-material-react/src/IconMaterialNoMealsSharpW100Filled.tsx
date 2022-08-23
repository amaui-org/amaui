import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoMealsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMealsSharpW100Filled'
      short_name='NoMeals'

      {...props}
    >
      <path d="M21.3 22.3 17.35 18.35V21.35H16.65V17.65L10.325 11.325Q9.95 11.75 9.438 12.025Q8.925 12.3 8.35 12.35V21.35H7.65V12.35Q6.525 12.225 5.738 11.387Q4.95 10.55 4.95 9.3V5.95L2.25 3.25L2.75 2.75L21.8 21.8ZM17.35 14.55 16.65 13.85V13.35H16.15L14.35 11.55V7Q14.35 5.45 15.138 4.212Q15.925 2.975 17.35 2.7ZM11.05 8.25 10.35 7.55V2.65H11.05ZM5.65 9.3H7.65V8.65L5.65 6.65ZM8.35 5.55 7.65 4.85V2.65H8.35ZM5.65 2.85 5.45 2.65H5.65Z"/>
    </Icon>
  );
});

IconMaterialNoMealsSharpW100Filled.displayName = 'AmauiIconMaterialNoMealsSharpW100Filled';

export default IconMaterialNoMealsSharpW100Filled;
