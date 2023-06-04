import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneAndroid = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroid'

      short_name='PhoneAndroid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 20h4v-1h-4Zm-5 3V1h14v22Zm2-7h10V6H7Zm0 5h10v-3H7ZM7 4h10V3H7Zm0 0V3v1Zm0 17v-3 3Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroid.displayName = 'AmauiIconMaterialPhoneAndroid';

export default IconMaterialPhoneAndroid;
