import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineStopsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineStopsFilled'

      short_name='AirlineStops'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 19v-2h2q-.375-3.4-2.938-5.7Q5.5 9 2 9V7q3.325 0 5.988 1.738Q10.65 10.475 12 13.3q1.05-2.25 2.713-3.8 1.662-1.55 3.262-2.5H14V5h7v7h-2V8.7q-1.85 1.125-3.737 3.15Q13.375 13.875 13 17h2v2Z"/>
    </Icon>
  );
});

IconMaterialAirlineStopsFilled.displayName = 'AmauiIconMaterialAirlineStopsFilled';

export default IconMaterialAirlineStopsFilled;
