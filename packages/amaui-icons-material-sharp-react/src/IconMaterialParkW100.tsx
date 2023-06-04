import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialParkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkW100'

      short_name='Park'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.7 20.7h-1.4v-4H5.45l4-6H7.5L12 4.25l4.5 6.45h-1.95l4 6H12.7ZM6.75 16h4-1.9 6.3-1.9 4Zm0 0h10.5l-4-6h1.9L12 5.5 8.85 10h1.9Z"/>
    </Icon>
  );
});

IconMaterialParkW100.displayName = 'AmauiIconMaterialParkW100';

export default IconMaterialParkW100;
