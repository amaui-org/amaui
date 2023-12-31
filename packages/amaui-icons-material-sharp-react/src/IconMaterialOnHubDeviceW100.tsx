import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOnHubDeviceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OnHubDeviceW100'

      short_name='OnHubDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M368-184v-28h224v28H368Zm0-108-39-496h302l-39 496H368Zm26-28h172l35-440H359l35 440Zm0-440h-35 242-207Z"/>
    </Icon>
  );
});

IconMaterialOnHubDeviceW100.displayName = 'AmauiIconMaterialOnHubDeviceW100';

export default IconMaterialOnHubDeviceW100;
