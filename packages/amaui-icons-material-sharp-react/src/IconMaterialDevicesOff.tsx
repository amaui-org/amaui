import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOff'

      short_name='DevicesOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m354 336-80-80h566v80H354Zm526 526-80-80V496H640v126l-80-80v-86q0-17 11.5-28.5T600 416h240q17 0 28.5 11.5T880 456v406Zm-88 138L686 896h-86q-17 0-28.5-11.5T560 856v-88L240 448v328h240v120H80V776h80V368L56 264l56-56 736 736-56 56Z"/>
    </Icon>
  );
});

IconMaterialDevicesOff.displayName = 'AmauiIconMaterialDevicesOff';

export default IconMaterialDevicesOff;
