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
      <path d="M668-172v-496h160v496H668ZM400-668h160v-80H400v80Zm-80 496v-496h52v-108h216v108h52v496H320Zm-188 0v-496h160v496H132Z"/>
    </Icon>
  );
});

IconMaterialTripW100Filled.displayName = 'AmauiIconMaterialTripW100Filled';

export default IconMaterialTripW100Filled;
