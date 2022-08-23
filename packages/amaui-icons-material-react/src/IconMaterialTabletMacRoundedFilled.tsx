import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletMacRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletMacRoundedFilled'
      short_name='TabletMac'

      {...props}
    >
      <path d="M5 23Q4.175 23 3.587 22.413Q3 21.825 3 21V3Q3 2.175 3.587 1.587Q4.175 1 5 1H19Q19.825 1 20.413 1.587Q21 2.175 21 3V21Q21 21.825 20.413 22.413Q19.825 23 19 23ZM5 16H19V6H5ZM12 20.5Q12.425 20.5 12.713 20.212Q13 19.925 13 19.5Q13 19.075 12.713 18.788Q12.425 18.5 12 18.5Q11.575 18.5 11.288 18.788Q11 19.075 11 19.5Q11 19.925 11.288 20.212Q11.575 20.5 12 20.5Z"/>
    </Icon>
  );
});

IconMaterialTabletMacRoundedFilled.displayName = 'AmauiIconMaterialTabletMacRoundedFilled';

export default IconMaterialTabletMacRoundedFilled;
