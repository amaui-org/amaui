import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCoffeeMakerRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeMakerRoundedFilled'
      short_name='CoffeeMaker'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H19Q19.425 2 19.712 2.287Q20 2.575 20 3Q20 3.425 19.712 3.712Q19.425 4 19 4H18V6Q18 6.425 17.712 6.713Q17.425 7 17 7H9Q8.575 7 8.288 6.713Q8 6.425 8 6V4H6Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20H10.05Q9.1 19.3 8.55 18.25Q8 17.2 8 16V13Q8 12.175 8.588 11.587Q9.175 11 10 11H16Q16.825 11 17.413 11.587Q18 12.175 18 13V16Q18 17.2 17.45 18.25Q16.9 19.3 15.95 20H19Q19.425 20 19.712 20.288Q20 20.575 20 21Q20 21.425 19.712 21.712Q19.425 22 19 22ZM13 10Q13.425 10 13.713 9.712Q14 9.425 14 9Q14 8.575 13.713 8.287Q13.425 8 13 8Q12.575 8 12.288 8.287Q12 8.575 12 9Q12 9.425 12.288 9.712Q12.575 10 13 10Z"/>
    </Icon>
  );
});

IconMaterialCoffeeMakerRoundedFilled.displayName = 'AmauiIconMaterialCoffeeMakerRoundedFilled';

export default IconMaterialCoffeeMakerRoundedFilled;
