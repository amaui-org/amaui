import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThermometerGainW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerGainW100'

      short_name='ThermometerGain'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M676 510V390H556v-28h120V242h28v120h120v28H704v120h-28ZM359.703 884q-61.297 0-104.5-43T212 736q0-42 22-76.5t58-55.5V336q0-29 19.5-48.5T360 268q29 0 48.5 19.5T428 336v268q36 21 57.5 55.5T508 736q-1 62-44 105t-104.297 43Zm.297-28q50 0 85-35t35-85q0-29-12.5-54T432 640l-32-24V336q0-17-11.5-28.5T360 296q-17 0-28.5 11.5T320 336v280l-32 24q-23 17-35.5 42T240 736q0 50 35 85t85 35Zm0-120Z"/>
    </Icon>
  );
});

IconMaterialThermometerGainW100.displayName = 'AmauiIconMaterialThermometerGainW100';

export default IconMaterialThermometerGainW100;
