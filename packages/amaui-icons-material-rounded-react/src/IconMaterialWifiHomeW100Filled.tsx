import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiHomeW100Filled'

      short_name='WifiHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M566-238q0 39 20 75t52 62v-67q0-6 4-10t10-4q6 0 10 4t4 10v84q0 13-8.5 21.5T636-54h-84q-6 0-10-4t-4-10q0-6 4-10t10-4h65q-35-29-57-70t-22-86q0-59 33-105t84-66q5-2 8 1.5t3 8.5q0 6-2.5 11.5T656-380q-40 19-65 57t-25 85Zm300 0q0-39-20-75t-52-62v67q0 6-4 10t-10 4q-6 0-10-4t-4-10v-84q0-13 8.5-21.5T796-422h84q6 0 10 4t4 10q0 6-4 10t-10 4h-65q35 29 57 70t22 86q0 58-33 104.5T777-67q-5 2-8-2t-3-9q0-6 2.5-11.5T776-97q40-20 65-58t25-83Zm-594 26q-25 0-42.5-17.5T212-272v-315l-68 53q-5 4-10 3t-9-6q-4-5-3.5-10t5.5-9l316-243q17-13 37-13t37 13l316 243q5 4 5.5 9t-3.5 10q-4 5-9 6t-10-3l-69-53v65q-5-1-10.5-1H726q-118 0-202 82.5T438-240v14q0 7 1 14H272Z"/>
    </Icon>
  );
});

IconMaterialWifiHomeW100Filled.displayName = 'AmauiIconMaterialWifiHomeW100Filled';

export default IconMaterialWifiHomeW100Filled;
