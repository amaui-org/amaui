import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalDrinkSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDrinkSharp'
      short_name='LocalDrink'

      {...props}
    >
      <path d="M5.2 22 3 2H21L18.8 22ZM7 20H17L18.1 10H5.9ZM5.65 8H18.35L18.75 4H5.25ZM12 19Q13.2 19 14.1 18.175Q15 17.35 15 16.15Q15 15.125 14.262 13.925Q13.525 12.725 12 11Q10.475 12.725 9.738 13.925Q9 15.125 9 16.15Q9 17.35 9.9 18.175Q10.8 19 12 19ZM12 17Q11.575 17 11.288 16.712Q11 16.425 11 16Q11 15.725 11.275 15.15Q11.55 14.575 12 13.9Q12.45 14.6 12.725 15.162Q13 15.725 13 16Q13 16.425 12.713 16.712Q12.425 17 12 17ZM5.9 10H18.1Z"/>
    </Icon>
  );
});

IconMaterialLocalDrinkSharp.displayName = 'AmauiIconMaterialLocalDrinkSharp';

export default IconMaterialLocalDrinkSharp;
