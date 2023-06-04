import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineStopsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineStopsW100'

      short_name='AirlineStops'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 18.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65q0-3.725-2.5-6.425-2.5-2.7-6.15-2.85-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1q3.325.125 5.775 2.212 2.45 2.088 3.25 5.213.75-2.475 2.675-4.35 1.925-1.875 4.4-3.075H15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.6q.325 0 .538.212.212.213.212.538v4.225q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V8.2q-3 1.375-5.15 3.8-2.15 2.425-2.15 5.65H14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAirlineStopsW100.displayName = 'AmauiIconMaterialAirlineStopsW100';

export default IconMaterialAirlineStopsW100;
