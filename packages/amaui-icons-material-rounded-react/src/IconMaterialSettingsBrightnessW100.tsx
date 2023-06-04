import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsBrightnessW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBrightnessW100'

      short_name='SettingsBrightness'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.05 14.7.425.425q.225.225.525.225.3 0 .525-.225l.425-.425h1q.325 0 .538-.213.212-.212.212-.537v-1l.425-.425q.225-.225.225-.525 0-.3-.225-.525l-.425-.425v-1q0-.325-.212-.538-.213-.212-.538-.212h-1l-.425-.425Q12.3 8.65 12 8.65q-.3 0-.525.225l-.425.425h-1q-.325 0-.537.212-.213.213-.213.538v1l-.425.425Q8.65 11.7 8.65 12q0 .3.225.525l.425.425v1q0 .325.213.537.212.213.537.213Zm.95-.35v-4.7q.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7q-.35 0-.575-.225Q4 17.55 4 17.2V6.8q0-.35.225-.575Q4.45 6 4.8 6q-.35 0-.575.225Q4 6.45 4 6.8v10.4q0 .35.225.575Q4.45 18 4.8 18Zm0 0h14.4q.35 0 .575-.225Q20 17.55 20 17.2V6.8q0-.35-.225-.575Q19.55 6 19.2 6H4.8q-.35 0-.575.225Q4 6.45 4 6.8v10.4q0 .35.225.575Q4.45 18 4.8 18Z"/>
    </Icon>
  );
});

IconMaterialSettingsBrightnessW100.displayName = 'AmauiIconMaterialSettingsBrightnessW100';

export default IconMaterialSettingsBrightnessW100;
