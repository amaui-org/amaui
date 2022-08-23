import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineStopsRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineStopsRoundedW100'
      short_name='AirlineStops'

      {...props}
    >
      <path d="M10 18.35Q9.85 18.35 9.75 18.25Q9.65 18.15 9.65 18Q9.65 17.85 9.75 17.75Q9.85 17.65 10 17.65H11.65Q11.65 13.925 9.15 11.225Q6.65 8.525 3 8.375Q2.85 8.375 2.75 8.275Q2.65 8.175 2.65 8.025Q2.65 7.875 2.75 7.775Q2.85 7.675 3 7.675Q6.325 7.8 8.775 9.887Q11.225 11.975 12.025 15.1Q12.775 12.625 14.7 10.75Q16.625 8.875 19.1 7.675H15Q14.85 7.675 14.75 7.575Q14.65 7.475 14.65 7.325Q14.65 7.175 14.75 7.075Q14.85 6.975 15 6.975H19.6Q19.925 6.975 20.138 7.187Q20.35 7.4 20.35 7.725V11.95Q20.35 12.1 20.25 12.2Q20.15 12.3 20 12.3Q19.85 12.3 19.75 12.2Q19.65 12.1 19.65 11.95V8.2Q16.65 9.575 14.5 12Q12.35 14.425 12.35 17.65H14Q14.15 17.65 14.25 17.75Q14.35 17.85 14.35 18Q14.35 18.15 14.25 18.25Q14.15 18.35 14 18.35Z"/>
    </Icon>
  );
});

IconMaterialAirlineStopsRoundedW100.displayName = 'AmauiIconMaterialAirlineStopsRoundedW100';

export default IconMaterialAirlineStopsRoundedW100;
