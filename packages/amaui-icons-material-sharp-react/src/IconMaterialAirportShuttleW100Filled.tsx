import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirportShuttleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirportShuttleW100Filled'

      short_name='AirportShuttle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.475 16.65q-.8 0-1.375-.575T4.525 14.7h-1.9V6.3h13.5l5.25 4.85v3.55h-1.5q0 .8-.563 1.375-.562.575-1.387.575-.8 0-1.375-.575t-.575-1.375h-7.55q0 .8-.562 1.375-.563.575-1.388.575Zm7.55-5.9h5.9L15.875 7h-1.85Zm-5.35 0h4.65V7h-4.65Zm-5.35 0h4.65V7h-4.65Zm3.15 5.2q.525 0 .888-.363.362-.362.362-.887t-.362-.888Q7 13.45 6.475 13.45t-.887.362q-.363.363-.363.888t.363.887q.362.363.887.363Zm11.45 0q.525 0 .887-.363.363-.362.363-.887t-.363-.888q-.362-.362-.887-.362t-.887.362q-.363.363-.363.888t.363.887q.362.363.887.363Z"/>
    </Icon>
  );
});

IconMaterialAirportShuttleW100Filled.displayName = 'AmauiIconMaterialAirportShuttleW100Filled';

export default IconMaterialAirportShuttleW100Filled;
