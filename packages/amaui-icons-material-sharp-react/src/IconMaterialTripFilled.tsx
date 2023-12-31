import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTripFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TripFilled'

      short_name='Trip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-120v-600h160v600H720ZM400-720h160v-80H400v80Zm-80 600v-760h320v760H320Zm-240 0v-600h160v600H80Z"/>
    </Icon>
  );
});

IconMaterialTripFilled.displayName = 'AmauiIconMaterialTripFilled';

export default IconMaterialTripFilled;
