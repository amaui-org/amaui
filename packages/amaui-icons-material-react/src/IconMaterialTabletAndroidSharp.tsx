import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletAndroidSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletAndroidSharp'
      short_name='TabletAndroid'

      {...props}
    >
      <path d="M10 20H14V19H10ZM3 23V1H21V23ZM5 16H19V6H5ZM5 21H19V18H5ZM5 4H19V3H5ZM5 4V3V4ZM5 21V18V21Z"/>
    </Icon>
  );
});

IconMaterialTabletAndroidSharp.displayName = 'AmauiIconMaterialTabletAndroidSharp';

export default IconMaterialTabletAndroidSharp;
