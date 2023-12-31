import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTripW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TripW100Filled'

      short_name='Trip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M668-172v-496h100q26 0 43 17t17 43v376q0 26-17 43t-43 17H668ZM400-668h160v-48q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22v48Zm-80 496v-496h52v-48q0-26 17-43t43-17h96q26 0 43 17t17 43v48h52v496H320Zm-128 0q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h100v496H192Z"/>
    </Icon>
  );
});

IconMaterialTripW100Filled.displayName = 'AmauiIconMaterialTripW100Filled';

export default IconMaterialTripW100Filled;
