import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInventorySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InventorySharpW100Filled'
      short_name='Inventory'

      {...props}
    >
      <path d="M12 5Q12.425 5 12.713 4.712Q13 4.425 13 4Q13 3.575 12.713 3.287Q12.425 3 12 3Q11.575 3 11.288 3.287Q11 3.575 11 4Q11 4.425 11.288 4.712Q11.575 5 12 5ZM11 19.7H4.3V4.3H10.35Q10.2 3.55 10.65 2.925Q11.1 2.3 12 2.3Q12.9 2.3 13.35 2.937Q13.8 3.575 13.65 4.3H19.7V10H19V5.8Q19 5.5 18.75 5.25Q18.5 5 18.2 5H15.7V7H8.3V5H5.8Q5.5 5 5.25 5.25Q5 5.5 5 5.8V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19H11ZM15.5 19 12.15 15.65 12.65 15.15 15.5 18 21.2 12.3 21.7 12.8Z"/>
    </Icon>
  );
});

IconMaterialInventorySharpW100Filled.displayName = 'AmauiIconMaterialInventorySharpW100Filled';

export default IconMaterialInventorySharpW100Filled;
