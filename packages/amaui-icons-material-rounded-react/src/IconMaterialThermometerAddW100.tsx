import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThermometerAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerAddW100'

      short_name='ThermometerAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M676-666H570q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h106v-106q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v106h106q5.95 0 9.975 4.035 4.025 4.035 4.025 10T819.975-670q-4.025 4-9.975 4H704v106q0 5.95-4.035 9.975-4.035 4.025-10 4.025T680-550.025q-4-4.025-4-9.975v-106ZM359.703-172q-61.297 0-104.5-43T212-320q0-42 22-76.5t58-55.5v-268q0-29 19.5-48.5T360-788q29 0 48.5 19.5T428-720v268q36 21 57.5 55.5T508-320q-1 62-44 105t-104.297 43ZM320-560h80v-160q0-17-11.5-28.5T360-760q-17 0-28.5 11.5T320-720v160Z"/>
    </Icon>
  );
});

IconMaterialThermometerAddW100.displayName = 'AmauiIconMaterialThermometerAddW100';

export default IconMaterialThermometerAddW100;
