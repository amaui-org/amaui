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
      <path d="M720-120v-600h80q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120h-80ZM400-720h160v-80H400v80Zm-80 600v-680q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v680H320Zm-160 0q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h80v600h-80Z"/>
    </Icon>
  );
});

IconMaterialTripFilled.displayName = 'AmauiIconMaterialTripFilled';

export default IconMaterialTripFilled;
