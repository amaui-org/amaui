import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryFullAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryFullAltW100Filled'

      short_name='BatteryFullAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.45 15.1q0 .325-.212.537-.213.213-.538.213H5.825q-.325 0-.538-.213-.212-.212-.212-.537v-1.5h-1.5v-3.2h1.5V8.9q0-.325.212-.538.213-.212.538-.212H19.7q.325 0 .538.212.212.213.212.538Z"/>
    </Icon>
  );
});

IconMaterialBatteryFullAltW100Filled.displayName = 'AmauiIconMaterialBatteryFullAltW100Filled';

export default IconMaterialBatteryFullAltW100Filled;
