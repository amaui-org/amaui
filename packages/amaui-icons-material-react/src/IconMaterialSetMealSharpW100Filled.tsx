import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSetMealSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SetMealSharpW100Filled'
      short_name='SetMeal'

      {...props}
    >
      <path d="M2.95 13.85Q2.65 13.85 2.4 13.6Q2.15 13.35 2.15 13.05V3.15H21.85V13.85ZM3.45 17.575 3.425 16.875 20.6 15.975 20.625 16.675ZM3.4 20.075V19.375H20.6V20.075ZM10.825 10.9Q12.475 10.9 13.875 10.4Q15.275 9.9 16.325 8.85Q16.475 9.525 17.1 9.938Q17.725 10.35 18.525 10.425V6.575Q17.725 6.65 17.087 7.087Q16.45 7.525 16.325 8.2Q15.175 7.125 13.812 6.612Q12.45 6.1 10.825 6.1Q9.025 6.1 7.488 6.737Q5.95 7.375 5.075 8.5Q5.95 9.625 7.488 10.262Q9.025 10.9 10.825 10.9Z"/>
    </Icon>
  );
});

IconMaterialSetMealSharpW100Filled.displayName = 'AmauiIconMaterialSetMealSharpW100Filled';

export default IconMaterialSetMealSharpW100Filled;
