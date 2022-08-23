import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirportShuttleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirportShuttleSharpFilled'
      short_name='AirportShuttle'

      {...props}
    >
      <path d="M6 19Q4.75 19 3.875 18.125Q3 17.25 3 16H1V5H17L23 11V16H21Q21 17.25 20.125 18.125Q19.25 19 18 19Q16.75 19 15.875 18.125Q15 17.25 15 16H9Q9 17.25 8.125 18.125Q7.25 19 6 19ZM15 10H19L16 7H15ZM9 10H13V7H9ZM3 10H7V7H3ZM6 17.25Q6.525 17.25 6.888 16.887Q7.25 16.525 7.25 16Q7.25 15.475 6.888 15.113Q6.525 14.75 6 14.75Q5.475 14.75 5.113 15.113Q4.75 15.475 4.75 16Q4.75 16.525 5.113 16.887Q5.475 17.25 6 17.25ZM18 17.25Q18.525 17.25 18.888 16.887Q19.25 16.525 19.25 16Q19.25 15.475 18.888 15.113Q18.525 14.75 18 14.75Q17.475 14.75 17.113 15.113Q16.75 15.475 16.75 16Q16.75 16.525 17.113 16.887Q17.475 17.25 18 17.25Z"/>
    </Icon>
  );
});

IconMaterialAirportShuttleSharpFilled.displayName = 'AmauiIconMaterialAirportShuttleSharpFilled';

export default IconMaterialAirportShuttleSharpFilled;
