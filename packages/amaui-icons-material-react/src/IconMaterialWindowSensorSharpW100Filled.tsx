import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowSensorSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSensorSharpW100Filled'
      short_name='WindowSensor'

      {...props}
    >
      <path d="M21.35 9q-.15 0-.25-.1t-.1-.25v-4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4q0 .15-.1.25t-.25.1ZM4.3 19.7V4.3h13.4v15.4Zm1.4-8.05h4.6v-.7h1.4v.7h4.6V5.7H5.7Zm0 6.65h10.6v-5.95H5.7ZM5 19h12V5H5Z"/>
    </Icon>
  );
});

IconMaterialWindowSensorSharpW100Filled.displayName = 'AmauiIconMaterialWindowSensorSharpW100Filled';

export default IconMaterialWindowSensorSharpW100Filled;
