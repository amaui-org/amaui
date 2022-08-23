import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCoffeeMakerSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeMakerSharp'
      short_name='CoffeeMaker'

      {...props}
    >
      <path d="M4 22V2H20V4H18V7H8V4H6V20H10.05Q9.1 19.325 8.55 18.288Q8 17.25 8 16V11H18V16Q18 17.25 17.45 18.288Q16.9 19.325 15.95 20H20V22ZM13 19Q14.25 19 15.125 18.125Q16 17.25 16 16V13H10V16Q10 17.25 10.875 18.125Q11.75 19 13 19ZM13 10Q13.425 10 13.713 9.712Q14 9.425 14 9Q14 8.575 13.713 8.287Q13.425 8 13 8Q12.575 8 12.288 8.287Q12 8.575 12 9Q12 9.425 12.288 9.712Q12.575 10 13 10ZM13 13Q13 13 13 13Q13 13 13 13Q13 13 13 13Q13 13 13 13Z"/>
    </Icon>
  );
});

IconMaterialCoffeeMakerSharp.displayName = 'AmauiIconMaterialCoffeeMakerSharp';

export default IconMaterialCoffeeMakerSharp;
