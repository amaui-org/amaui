import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposureSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureSharpFilled'
      short_name='Exposure'

      {...props}
    >
      <path d="M3 21V3H21V21ZM6 8.5H11V7H6ZM5 19H19V5ZM14.5 18V16H12.5V14.5H14.5V12.5H16V14.5H18V16H16V18Z"/>
    </Icon>
  );
});

IconMaterialExposureSharpFilled.displayName = 'AmauiIconMaterialExposureSharpFilled';

export default IconMaterialExposureSharpFilled;
