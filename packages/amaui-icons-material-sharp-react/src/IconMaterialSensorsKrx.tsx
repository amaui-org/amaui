import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorsKrx = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsKrx'

      short_name='SensorsKrx'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q-84 0-142-58t-58-142q0-83 58-141.5T480-680q83 0 141.5 58.5T680-480q0 84-58.5 142T480-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-312 60q-23-40-35.5-85T120-480q0-50 12.5-95t35.5-85l69 40q-18 31-27.5 66.5T200-480q0 38 9.5 73.5T237-340l-69 40Zm624 0-69-40q18-31 27.5-66.5T760-480q0-38-9.5-73.5T723-620l69-40q23 40 35.5 85t12.5 95q0 50-12.5 95T792-300ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialSensorsKrx.displayName = 'AmauiIconMaterialSensorsKrx';

export default IconMaterialSensorsKrx;
