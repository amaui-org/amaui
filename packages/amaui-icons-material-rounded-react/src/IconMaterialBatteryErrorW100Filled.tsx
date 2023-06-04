import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryErrorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryErrorW100Filled'

      short_name='BatteryError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m740 856-75 74q-4 4-9 3.5t-9.174-4.5Q643 925.333 643 919.667q0-5.667 4-9.667l74-74-75-75q-4-4-3.5-9.5t4.5-9.5q4-4 9.667-4 5.666 0 9.333 4l74 75 75-75q4-4 9.5-3.5t9.674 4.674Q838 747 838 752t-4 9l-74 75 74 75q4 4 3.5 9.5t-4.674 9.674Q829 934 824 934t-9-4l-75-74Zm-384 58q-12.75 0-21.375-8.625T326 884V329q0-12.75 8.625-21.375T356 299h60v-30q0-12.75 8.625-21.375T446 239h68q12.75 0 21.375 8.625T544 269v30h60q12.75 0 21.375 8.625T634 329v299q-59 29-93 85.5T507 836q0 22 3 40t10 38H356Z"/>
    </Icon>
  );
});

IconMaterialBatteryErrorW100Filled.displayName = 'AmauiIconMaterialBatteryErrorW100Filled';

export default IconMaterialBatteryErrorW100Filled;
