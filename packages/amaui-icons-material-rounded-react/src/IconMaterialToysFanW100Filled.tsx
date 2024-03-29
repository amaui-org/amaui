import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToysFanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysFanW100Filled'

      short_name='ToysFan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12q0-1.8 1.3-3.1t3.1-1.3q1.8 0 3.1 1.3t1.3 3.1Zm-4.4 4.4q-1.8 0-3.1-1.3T3.2 12H12q0 1.8-1.3 3.1t-3.1 1.3ZM12 12q-1.8 0-3.1-1.3T7.6 7.6q0-1.8 1.3-3.1T12 3.2Zm0 8.8V12q1.8 0 3.1 1.3t1.3 3.1q0 1.8-1.3 3.1T12 20.8Z"/>
    </Icon>
  );
});

IconMaterialToysFanW100Filled.displayName = 'AmauiIconMaterialToysFanW100Filled';

export default IconMaterialToysFanW100Filled;
