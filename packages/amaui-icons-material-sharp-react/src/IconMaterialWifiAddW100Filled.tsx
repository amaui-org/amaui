import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiAddW100Filled'

      short_name='WifiAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 862 74 456q85-73 189.5-110.5T480 308q112 0 216.5 37.5T886 456l-54 54q-20-8-41.468-11.5Q769.063 495 748 495q-97 0-166 69t-69 166q0 10.439 1.125 21.28 1.125 10.841 3 21.281Q519 783 521.571 793.473 524.143 803.946 528 814l-48 48Zm254 2V744H614v-28h120V596h28v120h120v28H762v120h-28Z"/>
    </Icon>
  );
});

IconMaterialWifiAddW100Filled.displayName = 'AmauiIconMaterialWifiAddW100Filled';

export default IconMaterialWifiAddW100Filled;
