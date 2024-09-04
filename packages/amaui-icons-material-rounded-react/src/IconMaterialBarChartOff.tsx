import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBarChartOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChartOff'

      short_name='BarChartOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160q-17 0-28.5-11.5T160-200v-360q0-17 11.5-28.5T200-600h80q17 0 28.5 11.5T320-560v360q0 17-11.5 28.5T280-160h-80Zm240 0q-17 0-28.5-11.5T400-200v-360l160 160v200q0 17-11.5 28.5T520-160h-80Zm120-354L400-674v-86q0-17 11.5-28.5T440-800h80q17 0 28.5 11.5T560-760v246Zm240 240L640-434v-6h120q17 0 28.5 11.5T800-400v126ZM763-84 83-763q-12-12-11.5-28.5T84-820q12-12 28.5-12t28.5 12l679 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84Z"/>
    </Icon>
  );
});

IconMaterialBarChartOff.displayName = 'AmauiIconMaterialBarChartOff';

export default IconMaterialBarChartOff;
