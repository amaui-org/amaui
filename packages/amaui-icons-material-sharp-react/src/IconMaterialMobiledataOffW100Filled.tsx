import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobiledataOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobiledataOffW100Filled'

      short_name='MobiledataOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.65 20.65-10.3-10.3v8.1l2.25-2.25.5.5L9 19.8l-3.1-3.1.5-.5 2.25 2.25v-8.8L3.3 4.3l.5-.5 16.35 16.35Zm-4.3-8.15-.7-.7V6.55L12.4 8.8l-.5-.5L15 5.2l3.1 3.1-.5.5-2.25-2.25Z"/>
    </Icon>
  );
});

IconMaterialMobiledataOffW100Filled.displayName = 'AmauiIconMaterialMobiledataOffW100Filled';

export default IconMaterialMobiledataOffW100Filled;
