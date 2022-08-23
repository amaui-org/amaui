import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalDrinkSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDrinkSharpW100'
      short_name='LocalDrink'

      {...props}
    >
      <path d="M6.35 20.7 4.45 3.3H19.55L17.65 20.7ZM7 20H17L18.2 9.2H5.8ZM5.7 8.5H18.3L18.75 4H5.25ZM12 17.85Q12.925 17.85 13.562 17.212Q14.2 16.575 14.2 15.65Q14.2 14.925 13.775 14.112Q13.35 13.3 12 11.5Q10.65 13.3 10.225 14.112Q9.8 14.925 9.8 15.65Q9.8 16.575 10.438 17.212Q11.075 17.85 12 17.85ZM12 17.15Q11.375 17.15 10.938 16.725Q10.5 16.3 10.5 15.675Q10.5 15 10.913 14.287Q11.325 13.575 12 12.675Q12.675 13.625 13.088 14.325Q13.5 15.025 13.5 15.675Q13.5 16.3 13.062 16.725Q12.625 17.15 12 17.15ZM5.8 9.2H18.2Z"/>
    </Icon>
  );
});

IconMaterialLocalDrinkSharpW100.displayName = 'AmauiIconMaterialLocalDrinkSharpW100';

export default IconMaterialLocalDrinkSharpW100;
