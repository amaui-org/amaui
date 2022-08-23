import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryLowSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryLowSharpW100'
      short_name='BatteryLow'

      {...props}
    >
      <path d="M20.45 15.1q0 .325-.212.537-.213.213-.538.213H5.825q-.325 0-.538-.213-.212-.212-.212-.537v-1.5h-1.5v-3.2h1.5V8.9q0-.325.212-.538.213-.212.538-.212H19.7q.325 0 .538.212.212.213.212.538Zm-3.7.05v-6.3h-11v6.3Z"/>
    </Icon>
  );
});

IconMaterialBatteryLowSharpW100.displayName = 'AmauiIconMaterialBatteryLowSharpW100';

export default IconMaterialBatteryLowSharpW100;
