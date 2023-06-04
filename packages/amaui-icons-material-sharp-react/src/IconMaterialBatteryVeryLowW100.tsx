import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryVeryLowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVeryLowW100'

      short_name='BatteryVeryLow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.45 15.1q0 .325-.212.537-.213.213-.538.213H5.825q-.325 0-.538-.213-.212-.212-.212-.537v-1.5h-1.5v-3.2h1.5V8.9q0-.325.212-.538.213-.212.538-.212H19.7q.325 0 .538.212.212.213.212.538Zm-1.7.05v-6.3h-13v6.3Z"/>
    </Icon>
  );
});

IconMaterialBatteryVeryLowW100.displayName = 'AmauiIconMaterialBatteryVeryLowW100';

export default IconMaterialBatteryVeryLowW100;
