import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineStopsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineStopsRounded'
      short_name='AirlineStops'

      {...props}
    >
      <path d="M10 19Q9.575 19 9.288 18.712Q9 18.425 9 18Q9 17.575 9.288 17.288Q9.575 17 10 17H11Q10.65 13.85 8.4 11.625Q6.15 9.4 3 9.05Q2.575 9 2.288 8.712Q2 8.425 2 8Q2 7.575 2.3 7.287Q2.6 7 3 7.05Q6 7.325 8.375 9Q10.75 10.675 12 13.3Q13.05 11.05 14.713 9.5Q16.375 7.95 17.975 7H15Q14.575 7 14.288 6.713Q14 6.425 14 6Q14 5.575 14.288 5.287Q14.575 5 15 5H20Q20.425 5 20.712 5.287Q21 5.575 21 6V11Q21 11.425 20.712 11.712Q20.425 12 20 12Q19.575 12 19.288 11.712Q19 11.425 19 11V8.7Q17.15 9.825 15.263 11.85Q13.375 13.875 13 17H14Q14.425 17 14.713 17.288Q15 17.575 15 18Q15 18.425 14.713 18.712Q14.425 19 14 19Z"/>
    </Icon>
  );
});

IconMaterialAirlineStopsRounded.displayName = 'AmauiIconMaterialAirlineStopsRounded';

export default IconMaterialAirlineStopsRounded;
