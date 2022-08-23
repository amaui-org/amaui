import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowSensorRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSensorRoundedW100'
      short_name='WindowSensor'

      {...props}
    >
      <path d="M21.35 9q-.15 0-.25-.1t-.1-.25v-4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4q0 .15-.1.25t-.25.1ZM4.3 19.7V4.3h13.4v15.4Zm.7-8.05h5.3v-.7h1.4v.7H17V5H5ZM5 19h12v-6.65H5Zm0 0h12H5Z"/>
    </Icon>
  );
});

IconMaterialWindowSensorRoundedW100.displayName = 'AmauiIconMaterialWindowSensorRoundedW100';

export default IconMaterialWindowSensorRoundedW100;
