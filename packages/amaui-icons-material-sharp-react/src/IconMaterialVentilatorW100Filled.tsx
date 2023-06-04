import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVentilatorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VentilatorW100Filled'

      short_name='Ventilator'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 904q-81 0-151.5-31T204 788q-8 4-15.5 6t-16.5 2q-29 0-48.5-19.5T104 728q0-16 6-29t17-22q-13-29-21-59.5T94 555l28-3q3 29 11 57t19 54q5-2 10-2.5t10-.5q29 0 48.5 19.5T240 728q0 12-4 22.5T225 770q47 48 109 75.5T466 876V678q0-27-19.5-46.5T400 612q-56 0-95-39t-39-95q0-56 39-95t95-39h82v-64h236v64h46v28h-46v64H482v-64h-82q-45 0-75.5 30.5T294 478q0 45 30.5 75.5T400 584q39 0 66.5 27.5T494 678v198q107-4 191.5-64.5T811 656l-46-24 13-24 43 22q6-19 10.5-38.5T838 552l29 3q-2 23-7 45t-13 43l44 22-12 24-42-20q-45 105-141 170t-216 65Z"/>
    </Icon>
  );
});

IconMaterialVentilatorW100Filled.displayName = 'AmauiIconMaterialVentilatorW100Filled';

export default IconMaterialVentilatorW100Filled;
