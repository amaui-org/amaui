import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSavingsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SavingsSharpW100Filled'
      short_name='Savings'

      {...props}
    >
      <path d="M16 10.7Q16.275 10.7 16.488 10.487Q16.7 10.275 16.7 10Q16.7 9.725 16.488 9.512Q16.275 9.3 16 9.3Q15.725 9.3 15.513 9.512Q15.3 9.725 15.3 10Q15.3 10.275 15.513 10.487Q15.725 10.7 16 10.7ZM8 8.35H13V7.65H8ZM5.475 19.7Q4.75 17.075 4.325 15.438Q3.9 13.8 3.675 12.725Q3.45 11.65 3.375 10.95Q3.3 10.25 3.3 9.5Q3.3 7.75 4.525 6.525Q5.75 5.3 7.5 5.3H13.15Q13.825 4.4 14.7 3.85Q15.575 3.3 16.5 3.3Q16.575 3.3 16.637 3.362Q16.7 3.425 16.7 3.5Q16.7 3.525 16.688 3.537Q16.675 3.55 16.675 3.6Q16.55 3.925 16.425 4.375Q16.3 4.825 16.15 5.675L19.275 8.8H20.7V13.525L18.125 14.375L16.525 19.7H13.3V17.7H8.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialSavingsSharpW100Filled.displayName = 'AmauiIconMaterialSavingsSharpW100Filled';

export default IconMaterialSavingsSharpW100Filled;
