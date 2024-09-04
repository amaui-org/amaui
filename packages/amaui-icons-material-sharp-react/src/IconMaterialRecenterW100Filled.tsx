import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecenterW100Filled'

      short_name='Recenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-92v-189l-64 64-20-20 98-98 98 98-20 20-64-64v189h-28ZM237-382l-20-20 64-64H92v-28h189l-64-64 20-20 98 98-98 98Zm486 0-98-98 98-98 20 20-64 64h189v28H679l64 64-20 20Zm-243-65q-14 0-23.5-9.5T447-480q0-14 9.5-23.5T480-513q14 0 23.5 9.5T513-480q0 14-9.5 23.5T480-447Zm0-178-98-98 20-20 64 64v-189h28v189l64-64 20 20-98 98Z"/>
    </Icon>
  );
});

IconMaterialRecenterW100Filled.displayName = 'AmauiIconMaterialRecenterW100Filled';

export default IconMaterialRecenterW100Filled;
