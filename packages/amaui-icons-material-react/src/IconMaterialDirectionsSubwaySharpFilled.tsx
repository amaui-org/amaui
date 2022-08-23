import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsSubwaySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsSubwaySharpFilled'
      short_name='DirectionsSubway'

      {...props}
    >
      <path d="M6 21V20L7.5 19Q6.025 19 5.013 17.988Q4 16.975 4 15.5V6Q4 3.925 5.925 2.962Q7.85 2 12 2Q16.3 2 18.15 2.925Q20 3.85 20 6V15.5Q20 16.975 18.988 17.988Q17.975 19 16.5 19L18 20V21ZM6 10H11V7H6ZM13 10H18V7H13ZM8.5 16Q9.125 16 9.562 15.562Q10 15.125 10 14.5Q10 13.875 9.562 13.438Q9.125 13 8.5 13Q7.875 13 7.438 13.438Q7 13.875 7 14.5Q7 15.125 7.438 15.562Q7.875 16 8.5 16ZM15.5 16Q16.125 16 16.562 15.562Q17 15.125 17 14.5Q17 13.875 16.562 13.438Q16.125 13 15.5 13Q14.875 13 14.438 13.438Q14 13.875 14 14.5Q14 15.125 14.438 15.562Q14.875 16 15.5 16Z"/>
    </Icon>
  );
});

IconMaterialDirectionsSubwaySharpFilled.displayName = 'AmauiIconMaterialDirectionsSubwaySharpFilled';

export default IconMaterialDirectionsSubwaySharpFilled;
