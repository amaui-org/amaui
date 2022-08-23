import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAdUnitsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnitsRoundedFilled'
      short_name='AdUnits'

      {...props}
    >
      <path d="M9 9Q8.575 9 8.288 8.712Q8 8.425 8 8Q8 7.575 8.288 7.287Q8.575 7 9 7H15Q15.425 7 15.713 7.287Q16 7.575 16 8Q16 8.425 15.713 8.712Q15.425 9 15 9ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 18H17V6H7Z"/>
    </Icon>
  );
});

IconMaterialAdUnitsRoundedFilled.displayName = 'AmauiIconMaterialAdUnitsRoundedFilled';

export default IconMaterialAdUnitsRoundedFilled;
