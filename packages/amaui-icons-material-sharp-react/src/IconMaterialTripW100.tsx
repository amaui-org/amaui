import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTripW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TripW100'

      short_name='Trip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-496h240v-108h216v108h240v496H132Zm268-496h160v-80H400v80Zm-108 28H160v440h132v-440Zm348 440v-440H320v440h320Zm28-440v440h132v-440H668ZM480-420Z"/>
    </Icon>
  );
});

IconMaterialTripW100.displayName = 'AmauiIconMaterialTripW100';

export default IconMaterialTripW100;
