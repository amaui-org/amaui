import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryPlusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryPlusFilled'

      short_name='BatteryPlus'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M640 976V856H520v-80h120V656h80v120h120v80H720v120h-80Zm-360 0V256h120v-80h160v80h120v320q-100 0-170 70t-70 170q0 45 16 86t45 74H280Z"/>
    </Icon>
  );
});

IconMaterialBatteryPlusFilled.displayName = 'AmauiIconMaterialBatteryPlusFilled';

export default IconMaterialBatteryPlusFilled;
