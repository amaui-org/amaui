import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryShareW100Filled'

      short_name='BatteryShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-142q-13 0-21.5-8.5T326-172v-555q0-12 8.5-21t21.5-9h60v-30q0-12 8.5-21t21.5-9h68q12 0 21 9t9 21v30h60q12 0 21 9t9 21v71q0 6-4.5 10t-9.5 4q-6 0-10-4.5t-4-9.5v-74H354v560h252v-53q0-6 4-10t10-4q5 0 9.5 4t4.5 10v51q0 13-9 21.5t-21 8.5H356Zm92-164q-6 0-10-4t-4-10v-74q0-25 17-42.5t43-17.5h195l-79-79q-5-5-5-10t5-10q4-4 9.5-4t9.5 4l93 92q8 9 8 21.5t-8 21.5l-93 92q-4 4-9.5 4t-9.5-4q-5-5-5-10.5t5-9.5l79-80H494q-14 0-23 9.5t-9 22.5v75q0 5-4.5 9t-9.5 4Z"/>
    </Icon>
  );
});

IconMaterialBatteryShareW100Filled.displayName = 'AmauiIconMaterialBatteryShareW100Filled';

export default IconMaterialBatteryShareW100Filled;
