import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicalMaskW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalMaskW100Filled'

      short_name='MedicalMask'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 804q-54 0-106.5-4.5T267 787q-23-4-39-20.5T212 727v-22q-45-11-73-47t-28-82q0-46 28-82t73-47v-35q0-26 20-43.5t47-15.5q20 2 39.5 4.5T358 362q31 2 61 3t61 1q26 0 50.5-1t50.5-3q26-2 50.5-4t49.5-5q27-3 47 14.5t20 44.5v35q45 11 73 47t28 82q0 46-28 82t-73 47v22q0 23-16 39.5T693 787q-53 8-106 12.5T480 804Zm0-114q42 0 83-5t81-16q5-2 8-7t1-10q-2-5-7-8t-10-1q-38 11-77 15t-79 4q-40 0-79-4.5T324 642q-5-2-10 1.5t-7 8.5q-2 5 1.5 10t8.5 7q40 12 80.5 16.5T480 690Zm-268-14V476q-32 11-52.5 38.5T139 576q0 34 20.5 61.5T212 676Zm536 0q32-11 52.5-38.5T821 576q0-35-20.5-62T748 476v200ZM480 530q42 0 83-5t81-16q5-2 8-7t1-10q-2-5-7-8t-10-1q-38 11-77 15t-79 4q-40 0-79-4.5T324 482q-5-2-10 1.5t-7 8.5q-2 5 1 10t8 7q40 11 81 16t83 5Z"/>
    </Icon>
  );
});

IconMaterialMedicalMaskW100Filled.displayName = 'AmauiIconMaterialMedicalMaskW100Filled';

export default IconMaterialMedicalMaskW100Filled;
