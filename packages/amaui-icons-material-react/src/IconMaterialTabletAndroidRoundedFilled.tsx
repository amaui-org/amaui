import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletAndroidRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletAndroidRoundedFilled'
      short_name='TabletAndroid'

      {...props}
    >
      <path d="M10.5 20H13.5Q13.7 20 13.85 19.85Q14 19.7 14 19.5Q14 19.3 13.85 19.15Q13.7 19 13.5 19H10.5Q10.3 19 10.15 19.15Q10 19.3 10 19.5Q10 19.7 10.15 19.85Q10.3 20 10.5 20ZM5 23Q4.175 23 3.587 22.413Q3 21.825 3 21V3Q3 2.175 3.587 1.587Q4.175 1 5 1H19Q19.825 1 20.413 1.587Q21 2.175 21 3V21Q21 21.825 20.413 22.413Q19.825 23 19 23ZM5 16H19V6H5Z"/>
    </Icon>
  );
});

IconMaterialTabletAndroidRoundedFilled.displayName = 'AmauiIconMaterialTabletAndroidRoundedFilled';

export default IconMaterialTabletAndroidRoundedFilled;
