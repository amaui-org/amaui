import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialParkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkFilled'

      short_name='Park'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.95 22h-3.9v-4H3l4-6H5l7-10 7 10h-2l4 6h-7.05Z"/>
    </Icon>
  );
});

IconMaterialParkFilled.displayName = 'AmauiIconMaterialParkFilled';

export default IconMaterialParkFilled;
