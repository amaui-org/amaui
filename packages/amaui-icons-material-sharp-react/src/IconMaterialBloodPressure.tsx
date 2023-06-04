import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBloodPressure = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodPressure'

      short_name='BloodPressure'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 456V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v220h-80V336H160v120H80Zm347 440H160q-33 0-56.5-23.5T80 816V696h80v120h243q3 21 9 41t15 39Zm53-320Zm200 400q-83 0-141.5-58.5T480 776q0-83 58.5-141.5T680 576q83 0 141.5 58.5T880 776q0 83-58.5 141.5T680 976Zm8-180 91-91-28-28-91 91 28 28ZM80 616v-80h144l56 111 134-271h51l78 156q-18 11-34.5 23T478 582l-38-76-135 270h-50l-80-160H80Z"/>
    </Icon>
  );
});

IconMaterialBloodPressure.displayName = 'AmauiIconMaterialBloodPressure';

export default IconMaterialBloodPressure;
