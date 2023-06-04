import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneAndroidFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidFilled'

      short_name='PhoneAndroid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 20h4v-1h-4Zm-5 3V1h14v22Zm2-7h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroidFilled.displayName = 'AmauiIconMaterialPhoneAndroidFilled';

export default IconMaterialPhoneAndroidFilled;
