import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInventoryRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InventoryRoundedW100Filled'
      short_name='Inventory'

      {...props}
    >
      <path d="M12 5Q12.425 5 12.713 4.712Q13 4.425 13 4Q13 3.575 12.713 3.287Q12.425 3 12 3Q11.575 3 11.288 3.287Q11 3.575 11 4Q11 4.425 11.288 4.712Q11.575 5 12 5ZM11 19.7H5.8Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H10.35Q10.2 3.55 10.65 2.925Q11.1 2.3 12 2.3Q12.9 2.3 13.35 2.937Q13.8 3.575 13.65 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V10H19V5.8Q19 5.5 18.75 5.25Q18.5 5 18.2 5H15.7V5.5Q15.7 6.125 15.263 6.562Q14.825 7 14.2 7H9.8Q9.175 7 8.738 6.562Q8.3 6.125 8.3 5.5V5H5.8Q5.5 5 5.25 5.25Q5 5.5 5 5.8V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19H11ZM15.5 18 20.95 12.55Q21.05 12.45 21.188 12.438Q21.325 12.425 21.45 12.55Q21.575 12.675 21.575 12.8Q21.575 12.925 21.45 13.05L16.025 18.475Q15.8 18.7 15.5 18.7Q15.2 18.7 14.975 18.475L12.4 15.9Q12.3 15.8 12.288 15.662Q12.275 15.525 12.4 15.4Q12.525 15.275 12.65 15.275Q12.775 15.275 12.9 15.4Z"/>
    </Icon>
  );
});

IconMaterialInventoryRoundedW100Filled.displayName = 'AmauiIconMaterialInventoryRoundedW100Filled';

export default IconMaterialInventoryRoundedW100Filled;
