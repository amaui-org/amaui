import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTripOriginSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TripOriginSharp'
      short_name='TripOrigin'

      {...props}
    >
      <path d="M12 22Q9.95 22 8.125 21.212Q6.3 20.425 4.938 19.062Q3.575 17.7 2.788 15.875Q2 14.05 2 12Q2 9.925 2.788 8.113Q3.575 6.3 4.938 4.938Q6.3 3.575 8.125 2.787Q9.95 2 12 2Q14.075 2 15.887 2.787Q17.7 3.575 19.062 4.938Q20.425 6.3 21.212 8.113Q22 9.925 22 12Q22 14.05 21.212 15.875Q20.425 17.7 19.062 19.062Q17.7 20.425 15.887 21.212Q14.075 22 12 22ZM12 18Q14.5 18 16.25 16.25Q18 14.5 18 12Q18 9.5 16.25 7.75Q14.5 6 12 6Q9.5 6 7.75 7.75Q6 9.5 6 12Q6 14.5 7.75 16.25Q9.5 18 12 18Z"/>
    </Icon>
  );
});

IconMaterialTripOriginSharp.displayName = 'AmauiIconMaterialTripOriginSharp';

export default IconMaterialTripOriginSharp;
