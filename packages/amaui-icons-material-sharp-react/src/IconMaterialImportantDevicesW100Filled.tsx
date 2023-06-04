import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImportantDevicesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImportantDevicesW100Filled'

      short_name='ImportantDevices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.15 12.95 1.75-1.45 1.75 1.45L12 10.7l1.775-1.45H11.6l-.7-2.05-.7 2.05H8.025L9.8 10.7Zm6.55 6.75v-9h5.1v9Zm.7-1.7h3.7v-5.6h-3.7Zm-8.3 1.7V19h2.45v-3.3H3.2V4.3h15.4v5.4h-3.9v6h-3.45V19h2.45v.7Z"/>
    </Icon>
  );
});

IconMaterialImportantDevicesW100Filled.displayName = 'AmauiIconMaterialImportantDevicesW100Filled';

export default IconMaterialImportantDevicesW100Filled;
