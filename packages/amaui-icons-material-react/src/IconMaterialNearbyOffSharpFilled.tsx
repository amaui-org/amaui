import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearbyOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyOffSharpFilled'
      short_name='NearbyOff'

      {...props}
    >
      <path d="M11.975 22.775 1.2 12 5.2 8 1.45 4.2 2.8 2.8 21.2 21.2 19.8 22.55 16.05 18.8ZM12 19.2 14.25 17 12.8 15.55 12 16.4 7.6 12 8.45 11.2 7 9.75 4.8 12ZM18.8 16 17 14.2 19.2 12 12 4.8 9.8 7 8 5.2 11.975 1.225 22.8 12ZM15.6 12.8 11.2 8.4 12 7.6 16.4 12Z"/>
    </Icon>
  );
});

IconMaterialNearbyOffSharpFilled.displayName = 'AmauiIconMaterialNearbyOffSharpFilled';

export default IconMaterialNearbyOffSharpFilled;
