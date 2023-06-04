import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialParkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkW100Filled'

      short_name='Park'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.7 20.7h-1.4v-4H5.45l4-6H7.5L12 4.25l4.5 6.45h-1.95l4 6H12.7Z"/>
    </Icon>
  );
});

IconMaterialParkW100Filled.displayName = 'AmauiIconMaterialParkW100Filled';

export default IconMaterialParkW100Filled;
