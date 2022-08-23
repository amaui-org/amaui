import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkPingSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkPingSharpW100Filled'
      short_name='NetworkPing'

      {...props}
    >
      <path d="M5.7 16.6V15.9H11.925L4.2 8.175L4.7 7.7L12 14.975L17 9.975Q16.875 9.675 16.812 9.438Q16.75 9.2 16.75 9.025Q16.75 8.35 17.225 7.875Q17.7 7.4 18.375 7.4Q19.05 7.4 19.525 7.875Q20 8.35 20 9.025Q20 9.7 19.525 10.175Q19.05 10.65 18.375 10.65Q18.225 10.65 18.013 10.6Q17.8 10.55 17.525 10.425L12.075 15.9H18.3V16.6Z"/>
    </Icon>
  );
});

IconMaterialNetworkPingSharpW100Filled.displayName = 'AmauiIconMaterialNetworkPingSharpW100Filled';

export default IconMaterialNetworkPingSharpW100Filled;
