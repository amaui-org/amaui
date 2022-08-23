import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInventory2RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inventory2RoundedFilled'
      short_name='Inventory2'

      {...props}
    >
      <path d="M5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V8.7Q2.575 8.425 2.288 8Q2 7.575 2 7V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V7Q22 7.575 21.712 8Q21.425 8.425 21 8.7V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM20 7Q20 7 20 7Q20 7 20 7V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4V7Q4 7 4 7Q4 7 4 7ZM10 14H14Q14.425 14 14.713 13.712Q15 13.425 15 13Q15 12.575 14.713 12.287Q14.425 12 14 12H10Q9.575 12 9.288 12.287Q9 12.575 9 13Q9 13.425 9.288 13.712Q9.575 14 10 14Z"/>
    </Icon>
  );
});

IconMaterialInventory2RoundedFilled.displayName = 'AmauiIconMaterialInventory2RoundedFilled';

export default IconMaterialInventory2RoundedFilled;
