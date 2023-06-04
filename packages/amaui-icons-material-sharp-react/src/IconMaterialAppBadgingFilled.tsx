import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppBadgingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBadgingFilled'

      short_name='AppBadging'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M720 456q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q27 0 53 3.5t51 10.5q-31 29-47.5 66.5T520 336q0 83 58.5 141.5T720 536q42 0 79.5-16.5T866 472q7 25 10.5 51t3.5 53q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Z"/>
    </Icon>
  );
});

IconMaterialAppBadgingFilled.displayName = 'AmauiIconMaterialAppBadgingFilled';

export default IconMaterialAppBadgingFilled;
