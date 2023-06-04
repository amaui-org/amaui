import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorWindowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorWindowW100'

      short_name='SensorWindow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.675V3.325h13.4v17.35ZM6 11.65h4.65v-.7h2.7v.7H18V4.025H6Zm0 .7v7.625h12V12.35Zm0 7.625h12Z"/>
    </Icon>
  );
});

IconMaterialSensorWindowW100.displayName = 'AmauiIconMaterialSensorWindowW100';

export default IconMaterialSensorWindowW100;
