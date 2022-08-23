import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkWifi3BarSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi3BarSharpFilled'
      short_name='NetworkWifi3Bar'

      {...props}
    >
      <path d="M12 21 0 9Q2.4 6.55 5.5 5.275Q8.6 4 12 4Q15.425 4 18.525 5.275Q21.625 6.55 24 9ZM5.8 11.95Q7.125 11 8.7 10.462Q10.275 9.925 12 9.925Q13.725 9.925 15.3 10.462Q16.875 11 18.2 11.95L21.1 9.05Q19.15 7.575 16.838 6.787Q14.525 6 12 6Q9.475 6 7.162 6.787Q4.85 7.575 2.9 9.05Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi3BarSharpFilled.displayName = 'AmauiIconMaterialNetworkWifi3BarSharpFilled';

export default IconMaterialNetworkWifi3BarSharpFilled;
