import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineStopsSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineStopsSharpW100'
      short_name='AirlineStops'

      {...props}
    >
      <path d="M9.65 18.35V17.65H11.65Q11.65 13.825 9.05 11.1Q6.45 8.375 2.65 8.375V7.675Q6.075 7.675 8.638 9.787Q11.2 11.9 12.025 15.1Q12.775 12.625 14.7 10.75Q16.625 8.875 19.1 7.675H14.65V6.975H20.35V12.3H19.65V8.2Q16.65 9.575 14.5 12Q12.35 14.425 12.35 17.65H14.35V18.35Z"/>
    </Icon>
  );
});

IconMaterialAirlineStopsSharpW100.displayName = 'AmauiIconMaterialAirlineStopsSharpW100';

export default IconMaterialAirlineStopsSharpW100;
