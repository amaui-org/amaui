import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsRailwayRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRailwayRoundedW100Filled'
      short_name='DirectionsRailway'

      {...props}
    >
      <path d="M6.75 18.725Q6.75 18.675 6.8 18.575Q6.85 18.475 6.925 18.425L8 17.7Q6.875 17.7 6.088 16.913Q5.3 16.125 5.3 15V6Q5.3 4.55 6.85 3.925Q8.4 3.3 12 3.3Q15.6 3.3 17.15 3.925Q18.7 4.55 18.7 6V15Q18.7 16.125 17.913 16.913Q17.125 17.7 16 17.7L17.075 18.425Q17.15 18.475 17.2 18.55Q17.25 18.625 17.25 18.725Q17.25 18.85 17.175 18.925Q17.1 19 16.975 19H7Q6.875 19 6.812 18.938Q6.75 18.875 6.75 18.725ZM6 11.3H18V6.4H6ZM12 15.5Q12.425 15.5 12.713 15.212Q13 14.925 13 14.5Q13 14.075 12.713 13.787Q12.425 13.5 12 13.5Q11.575 13.5 11.288 13.787Q11 14.075 11 14.5Q11 14.925 11.288 15.212Q11.575 15.5 12 15.5Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRailwayRoundedW100Filled.displayName = 'AmauiIconMaterialDirectionsRailwayRoundedW100Filled';

export default IconMaterialDirectionsRailwayRoundedW100Filled;
