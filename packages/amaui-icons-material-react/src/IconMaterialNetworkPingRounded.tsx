import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkPingRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkPingRounded'
      short_name='NetworkPing'

      {...props}
    >
      <path d="M5 18Q4.575 18 4.287 17.712Q4 17.425 4 17Q4 16.575 4.287 16.288Q4.575 16 5 16H10.5L2.7 8.2Q2.425 7.925 2.413 7.512Q2.4 7.1 2.7 6.8Q2.975 6.525 3.4 6.525Q3.825 6.525 4.1 6.8L12 14.675L17.2 9.475Q17.1 9.25 17.05 9.012Q17 8.775 17 8.5Q17 7.45 17.725 6.725Q18.45 6 19.5 6Q20.55 6 21.275 6.725Q22 7.45 22 8.5Q22 9.55 21.275 10.275Q20.55 11 19.5 11Q19.275 11 19.062 10.962Q18.85 10.925 18.65 10.85L13.5 16H19Q19.425 16 19.712 16.288Q20 16.575 20 17Q20 17.425 19.712 17.712Q19.425 18 19 18Z"/>
    </Icon>
  );
});

IconMaterialNetworkPingRounded.displayName = 'AmauiIconMaterialNetworkPingRounded';

export default IconMaterialNetworkPingRounded;
