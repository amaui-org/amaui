import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletRoundedFilled'
      short_name='Tablet'

      {...props}
    >
      <path d="M3 20Q2.175 20 1.588 19.413Q1 18.825 1 18V6Q1 5.175 1.588 4.588Q2.175 4 3 4H21Q21.825 4 22.413 4.588Q23 5.175 23 6V18Q23 18.825 22.413 19.413Q21.825 20 21 20ZM6 18H18V6H6Z"/>
    </Icon>
  );
});

IconMaterialTabletRoundedFilled.displayName = 'AmauiIconMaterialTabletRoundedFilled';

export default IconMaterialTabletRoundedFilled;
