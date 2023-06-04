import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatterySaverW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatterySaverW100Filled'

      short_name='BatterySaver'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 21.35V4.65h2.75v-1.5h3.2v1.5h2.75v16.7Zm4-6h.7v-2h2v-.7h-2v-2h-.7v2h-2v.7h2Z"/>
    </Icon>
  );
});

IconMaterialBatterySaverW100Filled.displayName = 'AmauiIconMaterialBatterySaverW100Filled';

export default IconMaterialBatterySaverW100Filled;
