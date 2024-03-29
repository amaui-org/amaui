import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiAddFilled'

      short_name='WifiAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M452 908 29 485q-12-12-12-29t13-28q91-85 209-128.5T480 256q122 0 241 43.5T930 428q12 11 12.5 28T931 485l-68 68q-25-12-50-17t-53-5q-102 0-173.5 71.5T515 776q0 28 5 53t17 50l-29 29q-12 12-28 12t-28-12Zm268-92h-80q-17 0-28.5-11.5T600 776q0-17 11.5-28.5T640 736h80v-80q0-17 11.5-28.5T760 616q17 0 28.5 11.5T800 656v80h80q17 0 28.5 11.5T920 776q0 17-11.5 28.5T880 816h-80v80q0 17-11.5 28.5T760 936q-17 0-28.5-11.5T720 896v-80Z"/>
    </Icon>
  );
});

IconMaterialWifiAddFilled.displayName = 'AmauiIconMaterialWifiAddFilled';

export default IconMaterialWifiAddFilled;
