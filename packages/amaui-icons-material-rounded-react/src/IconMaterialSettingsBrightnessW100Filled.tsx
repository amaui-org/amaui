import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsBrightnessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBrightnessW100Filled'

      short_name='SettingsBrightness'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.05 14.7.425.425q.225.225.525.225.3 0 .525-.225l.425-.425h1q.325 0 .538-.213.212-.212.212-.537v-1l.425-.425q.225-.225.225-.525 0-.3-.225-.525l-.425-.425v-1q0-.325-.212-.538-.213-.212-.538-.212h-1l-.425-.425Q12.3 8.65 12 8.65q-.3 0-.525.225l-.425.425h-1q-.325 0-.537.212-.213.213-.213.538v1l-.425.425Q8.65 11.7 8.65 12q0 .3.225.525l.425.425v1q0 .325.213.537.212.213.537.213Zm.95-.35v-4.7q.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSettingsBrightnessW100Filled.displayName = 'AmauiIconMaterialSettingsBrightnessW100Filled';

export default IconMaterialSettingsBrightnessW100Filled;
