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
      <path d="m656 939-19-19 84-84-84-84 19-19 84 84 84-84 19 19-83 84 83 84-19 19-84-83-84 83Zm-330-25V299h90v-60h128v60h90v329q-8 4-14.5 8t-13.5 9V326H354v560h158q2 8 4 14.5t4 13.5H326Zm28-28h158-5 5-158Z"/>
    </Icon>
  );
});

IconMaterialBatteryErrorW100.displayName = 'AmauiIconMaterialBatteryErrorW100';

export default IconMaterialBatteryErrorW100;
