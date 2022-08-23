import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAdUnitsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnitsRounded'
      short_name='AdUnits'

      {...props}
    >
      <path d="M9 9Q8.575 9 8.288 8.712Q8 8.425 8 8Q8 7.575 8.288 7.287Q8.575 7 9 7H15Q15.425 7 15.713 7.287Q16 7.575 16 8Q16 8.425 15.713 8.712Q15.425 9 15 9ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 18H17V6H7ZM7 20V21Q7 21 7 21Q7 21 7 21H17Q17 21 17 21Q17 21 17 21V20ZM7 4H17V3Q17 3 17 3Q17 3 17 3H7Q7 3 7 3Q7 3 7 3ZM7 3Q7 3 7 3Q7 3 7 3V4V3Q7 3 7 3Q7 3 7 3ZM7 21Q7 21 7 21Q7 21 7 21V20V21Q7 21 7 21Q7 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialAdUnitsRounded.displayName = 'AmauiIconMaterialAdUnitsRounded';

export default IconMaterialAdUnitsRounded;
