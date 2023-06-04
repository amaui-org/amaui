import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThermometerLossW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerLossW100Filled'

      short_name='ThermometerLoss'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M824 390H556v-28h268v28ZM360 884q-62 0-105-43t-43-105q0-42 22-76.5t58-55.5V336q0-29 19.5-48.5T360 268q29 0 48.5 19.5T428 336v268q36 21 57.5 55.5T508 736q-1 62-44 105t-104 43Zm-40-388h80V336q0-17-11.5-28.5T360 296q-17 0-28.5 11.5T320 336v160Z"/>
    </Icon>
  );
});

IconMaterialThermometerLossW100Filled.displayName = 'AmauiIconMaterialThermometerLossW100Filled';

export default IconMaterialThermometerLossW100Filled;
