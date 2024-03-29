import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBloodPressureFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodPressureFilled'

      short_name='BloodPressure'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M680 976q-83 0-141.5-58.5T480 776q0-83 58.5-141.5T680 576q83 0 141.5 58.5T880 776q0 83-58.5 141.5T680 976Zm8-180 91-91-28-28-91 91 28 28ZM80 536V256h800v324q-40-41-91.5-62.5T680 496q-38 0-72.5 9.5T542 532l-66-134q-5-10-15-15t-21-5q-11 0-21 5t-15 15L280 647l-45-89q-5-10-14.5-16t-20.5-6H80Zm0 360V616h95l69 138q5 11 14.5 16.5T280 776q11 0 20.5-5.5T315 754l125-248 38 76q-36 38-57 87.5T400 776q0 31 6.5 61.5T427 896H80Z"/>
    </Icon>
  );
});

IconMaterialBloodPressureFilled.displayName = 'AmauiIconMaterialBloodPressureFilled';

export default IconMaterialBloodPressureFilled;
