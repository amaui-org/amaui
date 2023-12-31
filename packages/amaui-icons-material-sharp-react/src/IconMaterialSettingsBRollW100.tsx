import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsBRollW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBRollW100'

      short_name='SettingsBRoll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480Zm-64 348-14-112q-21-6-46.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-89-67 64-110 102 43q20-17 43.5-30.5T401-716l15-112h128l14 113q26 9 45.5 20.5T644-665l106-43 64 110-74 56q-9-2-18.5-4t-18.5-4l75-56-40-68-103 43q-17-19-47.5-37T532-691l-12-109h-80l-12 108q-30 6-55 20t-51 40l-100-42-40 68 87 65q-5 13-7 29t-2 33q0 15 2 30t6 29l-86 66 40 68 99-42q20 20 41.5 33.5T409-273q3 40 17 76t37 65h-47Zm17-272q3-7 6.5-13t7.5-12q-13-8-21-21t-8-30q0-25 17.5-42.5T478-540q16 0 29.5 7.5T529-512q6-4 12.5-7t12.5-6q-11-20-31.5-31.5T478-568q-37 0-62.5 25.5T390-480q0 25 11.5 45t31.5 31Zm235 205 93-93-93-93-20 20 60 59H574v28h133l-59 59 20 20Zm0 67q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
    </Icon>
  );
});

IconMaterialSettingsBRollW100.displayName = 'AmauiIconMaterialSettingsBRollW100';

export default IconMaterialSettingsBRollW100;
