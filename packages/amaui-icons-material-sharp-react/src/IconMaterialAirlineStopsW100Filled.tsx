import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineStopsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineStopsW100Filled'

      short_name='AirlineStops'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 18.35v-.7h2q0-3.825-2.6-6.55-2.6-2.725-6.4-2.725v-.7q3.425 0 5.988 2.112Q11.2 11.9 12.025 15.1q.75-2.475 2.675-4.35 1.925-1.875 4.4-3.075h-4.45v-.7h5.7V12.3h-.7V8.2q-3 1.375-5.15 3.8-2.15 2.425-2.15 5.65h2v.7Z"/>
    </Icon>
  );
});

IconMaterialAirlineStopsW100Filled.displayName = 'AmauiIconMaterialAirlineStopsW100Filled';

export default IconMaterialAirlineStopsW100Filled;
