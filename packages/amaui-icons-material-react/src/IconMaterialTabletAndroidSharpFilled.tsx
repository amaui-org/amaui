import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletAndroidSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletAndroidSharpFilled'
      short_name='TabletAndroid'

      {...props}
    >
      <path d="M10 20H14V19H10ZM3 23V1H21V23ZM5 16H19V6H5Z"/>
    </Icon>
  );
});

export default IconMaterialTabletAndroidSharpFilled;
