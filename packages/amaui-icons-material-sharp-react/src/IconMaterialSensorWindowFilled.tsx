import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorWindowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorWindowFilled'

      short_name='SensorWindow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h16v20Zm3-11h3v-1h4v1h3V5H7Zm0 2v6h10v-6ZM6 4v16h12V4Z"/>
    </Icon>
  );
});

IconMaterialSensorWindowFilled.displayName = 'AmauiIconMaterialSensorWindowFilled';

export default IconMaterialSensorWindowFilled;
