import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneAndroidW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidW100Filled'

      short_name='PhoneAndroid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.3 19.55h3.4v-.7h-3.4Zm-4 2.15V2.3h11.4v19.4Zm.7-5h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroidW100Filled.displayName = 'AmauiIconMaterialPhoneAndroidW100Filled';

export default IconMaterialPhoneAndroidW100Filled;
