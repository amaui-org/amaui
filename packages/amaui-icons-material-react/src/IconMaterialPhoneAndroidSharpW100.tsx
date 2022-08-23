import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneAndroidSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidSharpW100'
      short_name='PhoneAndroid'

      {...props}
    >
      <path d="M10.3 19.55H13.7V18.85H10.3ZM6.3 21.7V2.3H17.7V21.7ZM7 16.7H17V5.35H7ZM7 21H17V17.4H7ZM7 4.65H17V3H7ZM7 4.65V3V4.65ZM7 21V17.4V21Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroidSharpW100.displayName = 'AmauiIconMaterialPhoneAndroidSharpW100';

export default IconMaterialPhoneAndroidSharpW100;
