import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryErrorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryErrorW100'

      short_name='BatteryError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m740 856-75 74q-4 4-9 3.5t-9.174-4.5Q643 925.333 643 919.667q0-5.667 4-9.667l74-74-75-75q-4-4-3.5-9.5t4.5-9.5q4-4 9.667-4 5.666 0 9.333 4l74 75 75-75q4-4 9.5-3.5t9.674 4.674Q838 747 838 752t-4 9l-74 75 74 75q4 4 3.5 9.5t-4.674 9.674Q829 934 824 934t-9-4l-75-74Zm-384 58q-12.75 0-21.375-8.625T326 884V329q0-12.75 8.625-21.375T356 299h60v-30q0-12.75 8.625-21.375T446 239h68q12.75 0 21.375 8.625T544 269v30h60q12.75 0 21.375 8.625T634 329v299q-8 4-14.5 8t-13.5 9V326H354v560h158q2 8 4 14.5t4 13.5H356Zm-2-28h158-5 5-158Z"/>
    </Icon>
  );
});

IconMaterialBatteryErrorW100.displayName = 'AmauiIconMaterialBatteryErrorW100';

export default IconMaterialBatteryErrorW100;
