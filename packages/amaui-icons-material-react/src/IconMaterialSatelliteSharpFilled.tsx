import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSatelliteSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SatelliteSharpFilled'
      short_name='Satellite'

      {...props}
    >
      <path d="M6 12Q8.5 12 10.25 10.25Q12 8.5 12 6H10.3Q10.3 7.8 9.05 9.05Q7.8 10.3 6 10.3ZM6 8.6Q7.075 8.6 7.812 7.837Q8.55 7.075 8.55 6H6ZM6 17H18L14.25 12L11.25 16L9 13ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterialSatelliteSharpFilled.displayName = 'AmauiIconMaterialSatelliteSharpFilled';

export default IconMaterialSatelliteSharpFilled;
