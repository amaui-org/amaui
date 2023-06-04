import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryUnknownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryUnknownW100'

      short_name='BatteryUnknown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.35 21.35q-.3 0-.5-.2t-.2-.5V5.35q0-.3.2-.5t.5-.2h2.05V3.9q0-.325.213-.538.212-.212.537-.212h1.7q.325 0 .538.212.212.213.212.538v.75h2.05q.3 0 .5.2t.2.5v15.3q0 .3-.2.5t-.5.2Zm3.65-4q.225 0 .388-.162.162-.163.162-.388t-.162-.387q-.163-.163-.388-.163t-.387.163q-.163.162-.163.387t.163.388q.162.162.387.162Zm0-2.65q.125 0 .238-.1.112-.1.137-.25.2-1.1 1.138-1.675.937-.575.937-1.725 0-1.1-.675-1.725T12 8.6q-.8 0-1.325.35-.525.35-.85.875-.075.125-.025.275.05.15.2.2.125.05.25 0t.2-.175q.225-.35.6-.588.375-.237.95-.237.95 0 1.35.5.4.5.4 1.1 0 .525-.3.875t-.662.7q-.363.35-.7.775-.338.425-.413 1.1-.025.125.075.237.1.113.25.113Z"/>
    </Icon>
  );
});

IconMaterialBatteryUnknownW100.displayName = 'AmauiIconMaterialBatteryUnknownW100';

export default IconMaterialBatteryUnknownW100;
