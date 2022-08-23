import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearbyOffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyOffSharpW100'
      short_name='NearbyOff'

      {...props}
    >
      <path d="M11.975 20.475 3.475 11.975 6.925 8.525 3.025 4.625 3.525 4.125 19.775 20.375 19.275 20.875 15.425 17.025ZM11.975 19.175 14.775 16.375 12.8 14.4 11.975 15.225 8.725 11.975 9.55 11.15 7.575 9.175 4.775 11.975ZM17.325 15.125 16.675 14.475 19.175 11.975 11.975 4.775 9.45 7.3 8.8 6.65 11.975 3.475 20.475 11.975ZM14.7 12.5 11.45 9.25 11.95 8.75 15.2 12Z"/>
    </Icon>
  );
});

IconMaterialNearbyOffSharpW100.displayName = 'AmauiIconMaterialNearbyOffSharpW100';

export default IconMaterialNearbyOffSharpW100;
