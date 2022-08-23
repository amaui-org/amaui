import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCoffeeMakerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeMakerSharpFilled'
      short_name='CoffeeMaker'

      {...props}
    >
      <path d="M4 22V2H20V4H18V7H8V4H6V20H10.05Q9.1 19.3 8.55 18.25Q8 17.2 8 16V11H18V16Q18 17.2 17.45 18.25Q16.9 19.3 15.95 20H20V22ZM13 10Q13.425 10 13.713 9.712Q14 9.425 14 9Q14 8.575 13.713 8.287Q13.425 8 13 8Q12.575 8 12.288 8.287Q12 8.575 12 9Q12 9.425 12.288 9.712Q12.575 10 13 10Z"/>
    </Icon>
  );
});

IconMaterialCoffeeMakerSharpFilled.displayName = 'AmauiIconMaterialCoffeeMakerSharpFilled';

export default IconMaterialCoffeeMakerSharpFilled;
