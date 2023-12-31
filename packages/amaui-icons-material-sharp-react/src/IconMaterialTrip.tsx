import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Trip'

      short_name='Trip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-600h240v-160h320v160h240v600H80Zm320-600h160v-80H400v80Zm-160 80h-80v440h80v-440Zm400 440v-440H320v440h320Zm80-440v440h80v-440h-80ZM480-420Z"/>
    </Icon>
  );
});

IconMaterialTrip.displayName = 'AmauiIconMaterialTrip';

export default IconMaterialTrip;
