import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAlertW100Filled'

      short_name='BatteryAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.35 21.35q-.3 0-.5-.2t-.2-.5V5.35q0-.3.2-.5t.5-.2h2.05V3.9q0-.325.213-.538.212-.212.537-.212h1.7q.325 0 .538.212.212.213.212.538v.75h2.05q.3 0 .5.2t.2.5v15.3q0 .3-.2.5t-.5.2Zm3.7-4q.225 0 .388-.162.162-.163.162-.388t-.162-.387q-.163-.163-.388-.163t-.387.163q-.163.162-.163.387t.163.388q.162.162.387.162ZM12 14.7q.15 0 .25-.1t.1-.25v-5.4q0-.15-.1-.25T12 8.6q-.15 0-.25.1t-.1.25v5.4q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialBatteryAlertW100Filled.displayName = 'AmauiIconMaterialBatteryAlertW100Filled';

export default IconMaterialBatteryAlertW100Filled;
