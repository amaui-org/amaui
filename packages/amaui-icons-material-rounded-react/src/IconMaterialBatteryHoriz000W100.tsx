import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryHoriz000W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz000W100'

      short_name='BatteryHoriz000'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.45 15.1q0 .325-.212.537-.213.213-.538.213H5.825q-.325 0-.538-.213-.212-.212-.212-.537v-1.5h-.75q-.325 0-.537-.213-.213-.212-.213-.537v-1.7q0-.325.213-.538.212-.212.537-.212h.75V8.9q0-.325.212-.538.213-.212.538-.212H19.7q.325 0 .538.212.212.213.212.538Zm-.7.05v-6.3h-14v6.3Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz000W100.displayName = 'AmauiIconMaterialBatteryHoriz000W100';

export default IconMaterialBatteryHoriz000W100;
