import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorWindow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorWindow'

      short_name='SensorWindow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h16v20Zm2-11h4v-1h4v1h4V4H6Zm0 2v7h12v-7Zm0 7h12Z"/>
    </Icon>
  );
});

IconMaterialSensorWindow.displayName = 'AmauiIconMaterialSensorWindow';

export default IconMaterialSensorWindow;
