import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorWindowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorWindowW100Filled'

      short_name='SensorWindow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.675V3.325h13.4v17.35Zm1.4-9.225h3.95v-.7h2.7v.7h3.95V4.725H6.7Zm0 .7v7.125h10.6V12.15ZM6 4.025v15.95h12V4.025Z"/>
    </Icon>
  );
});

IconMaterialSensorWindowW100Filled.displayName = 'AmauiIconMaterialSensorWindowW100Filled';

export default IconMaterialSensorWindowW100Filled;
