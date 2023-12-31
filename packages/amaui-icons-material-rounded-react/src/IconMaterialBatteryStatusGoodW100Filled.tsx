import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryStatusGoodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryStatusGoodW100Filled'

      short_name='BatteryStatusGood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m638-189 131-132q4.091-4 9.545-4Q784-325 789-321t4.5 10q-.5 6-4.5 10L659-171q-9.067 9-21.533 9Q625-162 616-171l-45-45q-4-4-4.5-9.5T571-236q4-4 9.818-3.833 5.818.166 10.182 3.833l47 47Zm-282 47q-12.75 0-21.375-8.625T326-172v-555q0-12.75 8.625-21.375T356-757h60v-30q0-12.75 8.625-21.375T446-817h68q12.75 0 21.375 8.625T544-787v30h60q12.75 0 21.375 8.625T634-727v257q-83 17-136 81t-53 149q0 26 5.5 50.5T467-142H356Z"/>
    </Icon>
  );
});

IconMaterialBatteryStatusGoodW100Filled.displayName = 'AmauiIconMaterialBatteryStatusGoodW100Filled';

export default IconMaterialBatteryStatusGoodW100Filled;
