import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightLand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightLand'

      short_name='FlightLand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2.5 19h19v2h-19v-2zm16.84-3.15c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l16.57 4.44z"/>
    </Icon>
  );
});

IconMaterialFlightLand.displayName = 'AmauiIconMaterialFlightLand';

export default IconMaterialFlightLand;
