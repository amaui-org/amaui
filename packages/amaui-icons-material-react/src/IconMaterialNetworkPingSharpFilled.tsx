import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkPingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkPingSharpFilled'
      short_name='NetworkPing'

      {...props}
    >
      <path d="M4 18V16H10.5L2 7.5L3.4 6.1L12 14.675L17.2 9.475Q17.1 9.25 17.05 9.012Q17 8.775 17 8.5Q17 7.45 17.725 6.725Q18.45 6 19.5 6Q20.55 6 21.275 6.725Q22 7.45 22 8.5Q22 9.55 21.275 10.275Q20.55 11 19.5 11Q19.275 11 19.062 10.962Q18.85 10.925 18.65 10.85L13.5 16H20V18Z"/>
    </Icon>
  );
});

IconMaterialNetworkPingSharpFilled.displayName = 'AmauiIconMaterialNetworkPingSharpFilled';

export default IconMaterialNetworkPingSharpFilled;
