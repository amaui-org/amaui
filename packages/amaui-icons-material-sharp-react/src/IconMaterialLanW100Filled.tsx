import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanW100Filled'

      short_name='Lan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 21.35v-5.7h3v-4h5v-3.3h-3v-5.7h6.7v5.7h-3v3.3h5v4h3v5.7h-6.7v-5.7h3v-3.3h-9.3v3.3h3v5.7Z"/>
    </Icon>
  );
});

IconMaterialLanW100Filled.displayName = 'AmauiIconMaterialLanW100Filled';

export default IconMaterialLanW100Filled;
