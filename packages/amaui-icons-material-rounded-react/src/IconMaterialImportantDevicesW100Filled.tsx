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
      <path d="M16.4 19.7q-.3 0-.5-.2t-.2-.5v-7.6q0-.3.2-.5t.5-.2h3.7q.3 0 .5.2t.2.5V19q0 .3-.2.5t-.5.2Zm0-1.7h3.7v-5.6h-3.7Zm-7.95 1.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.1v-3.3H4.7q-.65 0-1.075-.425Q3.2 14.85 3.2 14.2V5.8q0-.65.425-1.075Q4.05 4.3 4.7 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v3.9h-2.2q-.725 0-1.212.488-.488.487-.488 1.212v4.3h-3.45V19h2.1q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm1.7-7.575.75-.625.75.625q.225.2.475.025.25-.175.175-.45l-.3-1 .9-.75q.225-.2.125-.45t-.375-.25H11.6l-.325-.95q-.05-.125-.15-.188-.1-.062-.225-.062t-.225.062q-.1.063-.15.188l-.325.95H9.15q-.275 0-.375.25-.1.25.125.45l.9.75-.3 1q-.075.275.175.45t.475-.025Z"/>
    </Icon>
  );
});

IconMaterialImportantDevicesW100Filled.displayName = 'AmauiIconMaterialImportantDevicesW100Filled';

export default IconMaterialImportantDevicesW100Filled;
