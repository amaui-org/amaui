import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineStopsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineStopsSharp'
      short_name='AirlineStops'

      {...props}
    >
      <path d="M9 19V17H11Q10.625 13.6 8.062 11.3Q5.5 9 2 9V7Q5.325 7 7.988 8.738Q10.65 10.475 12 13.3Q13.05 11.05 14.713 9.5Q16.375 7.95 17.975 7H14V5H21V12H19V8.7Q17.15 9.825 15.263 11.85Q13.375 13.875 13 17H15V19Z"/>
    </Icon>
  );
});

IconMaterialAirlineStopsSharp.displayName = 'AmauiIconMaterialAirlineStopsSharp';

export default IconMaterialAirlineStopsSharp;
