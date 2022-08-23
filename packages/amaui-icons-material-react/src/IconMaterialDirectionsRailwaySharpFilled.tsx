import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsRailwaySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRailwaySharpFilled'
      short_name='DirectionsRailway'

      {...props}
    >
      <path d="M6 21V20L7.5 19Q6.025 19 5.013 17.988Q4 16.975 4 15.5V6Q4 3.925 5.925 2.962Q7.85 2 12 2Q16.3 2 18.15 2.925Q20 3.85 20 6V15.5Q20 16.975 18.988 17.988Q17.975 19 16.5 19L18 20V21ZM6 10H18V7H6ZM12 16Q12.625 16 13.062 15.562Q13.5 15.125 13.5 14.5Q13.5 13.875 13.062 13.438Q12.625 13 12 13Q11.375 13 10.938 13.438Q10.5 13.875 10.5 14.5Q10.5 15.125 10.938 15.562Q11.375 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRailwaySharpFilled.displayName = 'AmauiIconMaterialDirectionsRailwaySharpFilled';

export default IconMaterialDirectionsRailwaySharpFilled;
