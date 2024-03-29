import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorWeightGain = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorWeightGain'

      short_name='MonitorWeightGain'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M720 896h-80q-17 0-28.5-11.5T600 856q0-17 11.5-28.5T640 816h80v-80q0-17 11.5-28.5T760 696q17 0 28.5 11.5T800 736v80h80q17 0 28.5 11.5T920 856q0 17-11.5 28.5T880 896h-80v80q0 17-11.5 28.5T760 1016q-17 0-28.5-11.5T720 976v-80Zm-520-40V296v560Zm280-520q-50 0-85 35t-35 85q0 50 35 85t85 35q50 0 85-35t35-85q0-50-35-85t-85-35Zm-60 100q8 0 14 6t6 14q0 8-6 14t-14 6q-8 0-14-6t-6-14q0-8 6-14t14-6Zm60 0q8 0 14 6t6 14q0 8-6 14t-14 6q-8 0-14-6t-6-14q0-8 6-14t14-6Zm60 0q8 0 14 6t6 14q0 8-6 14t-14 6q-8 0-14-6t-6-14q0-8 6-14t14-6ZM200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v280q0 17-11.5 28.5T800 616q-17 0-28.5-11.5T760 576V296H200v560h300q17 0 28.5 11.5T540 896q0 17-11.5 28.5T500 936H200Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightGain.displayName = 'AmauiIconMaterialMonitorWeightGain';

export default IconMaterialMonitorWeightGain;
