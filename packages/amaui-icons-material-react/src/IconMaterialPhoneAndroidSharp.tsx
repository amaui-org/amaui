import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneAndroidSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidSharp'
      short_name='PhoneAndroid'

      {...props}
    >
      <path d="M10 20H14V19H10ZM5 23V1H19V23ZM7 16H17V6H7ZM7 21H17V18H7ZM7 4H17V3H7ZM7 4V3V4ZM7 21V18V21Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroidSharp.displayName = 'AmauiIconMaterialPhoneAndroidSharp';

export default IconMaterialPhoneAndroidSharp;
