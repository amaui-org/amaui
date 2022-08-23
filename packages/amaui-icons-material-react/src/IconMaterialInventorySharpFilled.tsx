import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInventorySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InventorySharpFilled'
      short_name='Inventory'

      {...props}
    >
      <path d="M12 5Q12.425 5 12.713 4.712Q13 4.425 13 4Q13 3.575 12.713 3.287Q12.425 3 12 3Q11.575 3 11.288 3.287Q11 3.575 11 4Q11 4.425 11.288 4.712Q11.575 5 12 5ZM11 21H3V3H9.2Q9.5 2.125 10.262 1.562Q11.025 1 12 1Q12.975 1 13.738 1.562Q14.5 2.125 14.8 3H21V10H19V5Q19 5 19 5Q19 5 19 5H17V8H7V5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H11ZM15.5 19.925 11.25 15.675 12.65 14.275 15.5 17.125 21.15 11.475 22.55 12.875Z"/>
    </Icon>
  );
});

IconMaterialInventorySharpFilled.displayName = 'AmauiIconMaterialInventorySharpFilled';

export default IconMaterialInventorySharpFilled;
