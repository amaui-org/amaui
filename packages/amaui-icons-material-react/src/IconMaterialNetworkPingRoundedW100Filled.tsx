import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkPingRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkPingRoundedW100Filled'
      short_name='NetworkPing'

      {...props}
    >
      <path d="M6.05 16.6Q5.9 16.6 5.8 16.5Q5.7 16.4 5.7 16.25Q5.7 16.1 5.8 16Q5.9 15.9 6.05 15.9H11.925L4.45 8.425Q4.35 8.325 4.35 8.175Q4.35 8.025 4.45 7.925Q4.55 7.825 4.688 7.825Q4.825 7.825 4.925 7.925L12 14.975L17 9.975Q16.875 9.675 16.812 9.438Q16.75 9.2 16.75 9.025Q16.75 8.35 17.225 7.875Q17.7 7.4 18.375 7.4Q19.05 7.4 19.525 7.875Q20 8.35 20 9.025Q20 9.7 19.525 10.175Q19.05 10.65 18.375 10.65Q18.225 10.65 18.013 10.6Q17.8 10.55 17.525 10.425L12.075 15.9H17.95Q18.1 15.9 18.2 16Q18.3 16.1 18.3 16.25Q18.3 16.4 18.2 16.5Q18.1 16.6 17.95 16.6Z"/>
    </Icon>
  );
});

IconMaterialNetworkPingRoundedW100Filled.displayName = 'AmauiIconMaterialNetworkPingRoundedW100Filled';

export default IconMaterialNetworkPingRoundedW100Filled;
