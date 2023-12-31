import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsTimelapseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsTimelapseW100'

      short_name='SettingsTimelapse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-174v-192l160 96-160 96Zm-160 0v-192l160 96-160 96Zm-60-306Zm-64 348-14-112q-21-6-46.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-89-67 64-110 102 43q20-17 43.5-30.5T401-716l15-112h128l14 113q26 9 45.5 20.5T644-665l106-43 64 110-93 70q4 14 4.5 25.5t.5 22.5v14h-30v-14q0-17-2-30t-6-28l90-68-40-68-103 43q-17-19-47.5-37T532-691l-12-109h-80l-12 108q-30 6-55 20t-51 40l-100-42-40 68 87 65q-5 13-7 29t-2 33q0 15 2 30t6 29l-86 66 40 68 99-42q24 24 54.5 39.5T440-265v133h-24Zm24-268v-33q-10-8-16-20.5t-6-26.5q0-25 17.5-42.5T478-540q25 0 42.5 17.5T538-480q0 4-.5 7.5T536-466h29q1-4 1-7v-7q0-37-25.5-62.5T478-568q-37 0-62.5 25.5T390-480q0 26 13.5 47.5T440-400Z"/>
    </Icon>
  );
});

IconMaterialSettingsTimelapseW100.displayName = 'AmauiIconMaterialSettingsTimelapseW100';

export default IconMaterialSettingsTimelapseW100;
