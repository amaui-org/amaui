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
      <path d="M676 390H570q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h106V256q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v106h106q5.95 0 9.975 4.035 4.025 4.035 4.025 10T819.975 386q-4.025 4-9.975 4H704v106q0 5.95-4.035 9.975-4.035 4.025-10 4.025T680 505.975q-4-4.025-4-9.975V390ZM359.703 884q-61.297 0-104.5-43T212 736q0-42 22-76.5t58-55.5V336q0-29 19.5-48.5T360 268q29 0 48.5 19.5T428 336v268q36 21 57.5 55.5T508 736q-1 62-44 105t-104.297 43Zm.297-28q50 0 85-35t35-85q0-29-12.5-54T432 640l-32-24V336q0-17-11.5-28.5T360 296q-17 0-28.5 11.5T320 336v280l-32 24q-23 17-35.5 42T240 736q0 50 35 85t85 35Zm0-120Z"/>
    </Icon>
  );
});

IconMaterialThermometerGainW100.displayName = 'AmauiIconMaterialThermometerGainW100';

export default IconMaterialThermometerGainW100;
