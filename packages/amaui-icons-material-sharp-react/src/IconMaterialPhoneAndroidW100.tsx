import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneAndroidW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidW100'

      short_name='PhoneAndroid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.3 19.55h3.4v-.7h-3.4Zm-4 2.15V2.3h11.4v19.4Zm.7-5h10V5.35H7ZM7 21h10v-3.6H7ZM7 4.65h10V3H7Zm0 0V3v1.65ZM7 21v-3.6V21Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroidW100.displayName = 'AmauiIconMaterialPhoneAndroidW100';

export default IconMaterialPhoneAndroidW100;
