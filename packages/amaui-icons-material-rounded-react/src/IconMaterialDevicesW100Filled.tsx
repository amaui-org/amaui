import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesW100Filled'

      short_name='Devices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.275 17.35V6.75q0-.65.425-1.075.425-.425 1.075-.425h13.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-13.2q-.35 0-.575.225-.225.225-.225.575v10.6H10.8q.225 0 .375.15t.15.375q0 .225-.15.375t-.375.15h-7q-.225 0-.375-.15t-.15-.375q0-.225.15-.375t.375-.15Zm10.75 1.05q-.3 0-.5-.2t-.2-.5V9.65q0-.3.2-.5t.5-.2h4q.3 0 .5.2t.2.5v8.05q0 .3-.2.5t-.5.2Zm0-1.05h4v-7.7h-4Z"/>
    </Icon>
  );
});

IconMaterialDevicesW100Filled.displayName = 'AmauiIconMaterialDevicesW100Filled';

export default IconMaterialDevicesW100Filled;
