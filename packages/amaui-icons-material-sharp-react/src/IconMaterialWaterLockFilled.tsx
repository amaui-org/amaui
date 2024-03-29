import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterLockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLockFilled'

      short_name='WaterLock'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M360 416h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Zm400 560q-42 0-71-29t-29-71q0-20 7-36.5t19-30.5l74-83 74 83q12 14 19 30.5t7 36.5q0 42-29 71t-71 29ZM480 776q33 0 56.5-23.5T560 696q0-33-23.5-56.5T480 616q-33 0-56.5 23.5T400 696q0 33 23.5 56.5T480 776ZM240 976q-33 0-56.5-23.5T160 896V496q0-33 23.5-56.5T240 416h40v-80q0-83 58.5-141.5T480 136q83 0 141.5 58.5T680 336v80h40q33 0 56.5 23.5T800 496v164q-11-2-21-3t-21-1q-82 0-140 58t-58 141q0 33 10 64t31 57H240Z"/>
    </Icon>
  );
});

IconMaterialWaterLockFilled.displayName = 'AmauiIconMaterialWaterLockFilled';

export default IconMaterialWaterLockFilled;
