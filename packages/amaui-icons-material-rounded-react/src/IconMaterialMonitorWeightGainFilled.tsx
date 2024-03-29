import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorWeightGainFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorWeightGainFilled'

      short_name='MonitorWeightGain'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M720 896h-80q-17 0-28.5-11.5T600 856q0-17 11.5-28.5T640 816h80v-80q0-17 11.5-28.5T760 696q17 0 28.5 11.5T800 736v80h80q17 0 28.5 11.5T920 856q0 17-11.5 28.5T880 896h-80v80q0 17-11.5 28.5T760 1016q-17 0-28.5-11.5T720 976v-80ZM480 576q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-60-100q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm60 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm60 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6ZM200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v334q-20-7-40-10.5t-40-3.5q-100 0-170 70t-70 170q0 20 3.5 40t10.5 40H200Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightGainFilled.displayName = 'AmauiIconMaterialMonitorWeightGainFilled';

export default IconMaterialMonitorWeightGainFilled;
