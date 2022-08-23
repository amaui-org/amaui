import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInventoryRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InventoryRoundedFilled'
      short_name='Inventory'

      {...props}
    >
      <path d="M12 5Q12.425 5 12.713 4.712Q13 4.425 13 4Q13 3.575 12.713 3.287Q12.425 3 12 3Q11.575 3 11.288 3.287Q11 3.575 11 4Q11 4.425 11.288 4.712Q11.575 5 12 5ZM11 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H9.2Q9.5 2.125 10.262 1.562Q11.025 1 12 1Q12.975 1 13.738 1.562Q14.5 2.125 14.8 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V10H19V5Q19 5 19 5Q19 5 19 5H17V6Q17 6.825 16.413 7.412Q15.825 8 15 8H9Q8.175 8 7.588 7.412Q7 6.825 7 6V5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H11ZM15.5 17.125 20.45 12.175Q20.725 11.9 21.15 11.9Q21.575 11.9 21.85 12.175Q22.125 12.45 22.125 12.875Q22.125 13.3 21.85 13.575L16.2 19.225Q15.9 19.525 15.5 19.525Q15.1 19.525 14.8 19.225L11.95 16.375Q11.675 16.1 11.675 15.675Q11.675 15.25 11.95 14.975Q12.225 14.7 12.65 14.7Q13.075 14.7 13.35 14.975Z"/>
    </Icon>
  );
});

IconMaterialInventoryRoundedFilled.displayName = 'AmauiIconMaterialInventoryRoundedFilled';

export default IconMaterialInventoryRoundedFilled;
