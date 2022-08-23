import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiFoodBeverageRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFoodBeverageRoundedFilled'
      short_name='EmojiFoodBeverage'

      {...props}
    >
      <path d="M5 21Q4.575 21 4.287 20.712Q4 20.425 4 20Q4 19.575 4.287 19.288Q4.575 19 5 19H19Q19.425 19 19.712 19.288Q20 19.575 20 20Q20 20.425 19.712 20.712Q19.425 21 19 21ZM18 8H20Q20 8 20 8Q20 8 20 8V5Q20 5 20 5Q20 5 20 5H18ZM8 17Q6.35 17 5.175 15.825Q4 14.65 4 13V5Q4 4.175 4.588 3.587Q5.175 3 6 3H9V5.4L7.2 6.85Q7.15 6.9 7 7.25V11.5Q7 11.7 7.15 11.85Q7.3 12 7.5 12H11.5Q11.7 12 11.85 11.85Q12 11.7 12 11.5V7.25Q12 7.2 11.8 6.85L10 5.4V3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V8Q22 8.825 21.413 9.412Q20.825 10 20 10H18V13Q18 14.65 16.825 15.825Q15.65 17 14 17Z"/>
    </Icon>
  );
});

IconMaterialEmojiFoodBeverageRoundedFilled.displayName = 'AmauiIconMaterialEmojiFoodBeverageRoundedFilled';

export default IconMaterialEmojiFoodBeverageRoundedFilled;
