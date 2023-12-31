import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryStatusGoodW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryStatusGoodW100'

      short_name='BatteryStatusGood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m638-189 131-132q4.091-4 9.545-4Q784-325 789-321t4.5 10q-.5 6-4.5 10L659-171q-9.067 9-21.533 9Q625-162 616-171l-45-45q-4-4-4.5-9.5T571-236q4-4 9.818-3.833 5.818.166 10.182 3.833l47 47Zm-282 47q-12.75 0-21.375-8.625T326-172v-555q0-12.75 8.625-21.375T356-757h60v-30q0-12.75 8.625-21.375T446-817h68q12.75 0 21.375 8.625T544-787v30h60q12.75 0 21.375 8.625T634-727v257q-8 2-14.5 3.5T606-463v-267H354v560h102q2.065 7.667 5.032 14.333Q464-149 467-142H356Zm-2-28h102-11 11-102Z"/>
    </Icon>
  );
});

IconMaterialBatteryStatusGoodW100.displayName = 'AmauiIconMaterialBatteryStatusGoodW100';

export default IconMaterialBatteryStatusGoodW100;
