import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShutterSpeedAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedAdd'

      short_name='ShutterSpeedAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-440Zm70-40 55 96q-8 7-15 14t-14 15l-26-45-134 232q27 7 53.5 8t52.5-3q3 20 9.5 40T548-86q-17 3-34 4.5T480-80q-75 0-140.5-28.5T225-186q-49-49-77-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q63 0 120 21t104 59l58-58 56 56-56 58q38 49 59 109.5T840-427q-20-6-40-10t-40-4q0-10-1-19.5t-3-19.5H550ZM720-40v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM360-840v-80h240v80H360Zm120 320h268q-18-62-61.5-109T584-700L480-520Zm-70 40 134-232q-59-15-121.5-2.5T306-660l104 180Zm-206 80h206L276-632q-42 47-62.5 106.5T204-400Zm172 220 104-180H212q18 62 61.5 109T376-180Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeedAdd.displayName = 'AmauiIconMaterialShutterSpeedAdd';

export default IconMaterialShutterSpeedAdd;
