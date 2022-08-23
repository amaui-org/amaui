import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialComputerRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerRoundedFilled'
      short_name='Computer'

      {...props}
    >
      <path d="M4 18Q3.175 18 2.588 17.413Q2 16.825 2 16V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM2 21Q1.575 21 1.288 20.712Q1 20.425 1 20Q1 19.575 1.288 19.288Q1.575 19 2 19H22Q22.425 19 22.712 19.288Q23 19.575 23 20Q23 20.425 22.712 20.712Q22.425 21 22 21Z"/>
    </Icon>
  );
});

IconMaterialComputerRoundedFilled.displayName = 'AmauiIconMaterialComputerRoundedFilled';

export default IconMaterialComputerRoundedFilled;
