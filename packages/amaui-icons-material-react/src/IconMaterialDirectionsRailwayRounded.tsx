import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsRailwayRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRailwayRounded'
      short_name='DirectionsRailway'

      {...props}
    >
      <path d="M6.65 21Q6.375 21 6.188 20.812Q6 20.625 6 20.35Q6 20.225 6.075 20.062Q6.15 19.9 6.275 19.825L7.5 19Q6.025 19 5.013 17.988Q4 16.975 4 15.5V6Q4 3.925 5.925 2.962Q7.85 2 12 2Q16.3 2 18.15 2.925Q20 3.85 20 6V15.5Q20 16.975 18.988 17.988Q17.975 19 16.5 19L17.725 19.825Q17.85 19.9 17.925 20.05Q18 20.2 18 20.35Q18 20.625 17.812 20.812Q17.625 21 17.35 21ZM6 10H18V7H6ZM16.5 12H7.5Q6.85 12 6.425 12Q6 12 6 12H18Q18 12 17.575 12Q17.15 12 16.5 12ZM12 16Q12.625 16 13.062 15.562Q13.5 15.125 13.5 14.5Q13.5 13.875 13.062 13.438Q12.625 13 12 13Q11.375 13 10.938 13.438Q10.5 13.875 10.5 14.5Q10.5 15.125 10.938 15.562Q11.375 16 12 16ZM7.5 17H16.5Q17.15 17 17.575 16.575Q18 16.15 18 15.5V12H6V15.5Q6 16.15 6.425 16.575Q6.85 17 7.5 17ZM12 4Q9.85 4 8.438 4.25Q7.025 4.5 6.45 5H17.65Q17.2 4.5 15.787 4.25Q14.375 4 12 4ZM12 5Q14.375 5 15.787 5Q17.2 5 17.65 5H6.45Q7.025 5 8.438 5Q9.85 5 12 5Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRailwayRounded.displayName = 'AmauiIconMaterialDirectionsRailwayRounded';

export default IconMaterialDirectionsRailwayRounded;
