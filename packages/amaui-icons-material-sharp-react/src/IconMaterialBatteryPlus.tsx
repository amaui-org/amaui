import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryPlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryPlus'

      short_name='BatteryPlus'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 976V256h120v-80h160v80h120v320q-21 0-41 3.5T600 590V336H360v560h94q8 23 19.5 43t27.5 37H280Zm80-80h94-14 14-94Zm280 80V856H520v-80h120V656h80v120h120v80H720v120h-80Z"/>
    </Icon>
  );
});

IconMaterialBatteryPlus.displayName = 'AmauiIconMaterialBatteryPlus';

export default IconMaterialBatteryPlus;
