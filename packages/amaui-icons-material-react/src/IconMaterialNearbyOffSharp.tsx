import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearbyOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyOffSharp'
      short_name='NearbyOff'

      {...props}
    >
      <path d="M11.975 22.775 1.225 12.025 5.2 8.025 1.4 4.2 2.8 2.8 21.2 21.2 19.825 22.575 16.05 18.8ZM12 19.2 14.25 17 12.825 15.575 12 16.4 7.625 12.025 8.45 11.2 7.05 9.8 4.825 12.025ZM18.8 16 17 14.2 19.2 12 12 4.8 9.8 7 8 5.2 12 1.2 22.8 12ZM15.6 12.8 11.2 8.4 12 7.6 16.4 12Z"/>
    </Icon>
  );
});

IconMaterialNearbyOffSharp.displayName = 'AmauiIconMaterialNearbyOffSharp';

export default IconMaterialNearbyOffSharp;
