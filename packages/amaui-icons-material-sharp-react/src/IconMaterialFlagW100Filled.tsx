import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagW100Filled'

      short_name='Flag'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 20.35V5.3h6.65l.4 2h5.35v7.4h-4.65l-.4-2H7v7.65Z"/>
    </Icon>
  );
});

IconMaterialFlagW100Filled.displayName = 'AmauiIconMaterialFlagW100Filled';

export default IconMaterialFlagW100Filled;
