import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiAddW100'

      short_name='WifiAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M734 864V744H614v-28h120V596h28v120h120v28H762v120h-28Zm-254-2L74 456q85-73 189.5-110.5T480 308q112 0 216.5 37.5T886 456l-54 54q-8-3-15.5-5t-15.5-4l43-43q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 39-39q2 8 4 15.5t5 15.5l-48 48Zm0-283Z"/>
    </Icon>
  );
});

IconMaterialWifiAddW100.displayName = 'AmauiIconMaterialWifiAddW100';

export default IconMaterialWifiAddW100;
