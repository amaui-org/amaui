import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventBusyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventBusyW100Filled'

      short_name='EventBusy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.7 17.475-.5-.5 2.3-2.3-2.3-2.3.5-.5 2.3 2.3 2.3-2.3.5.5-2.3 2.3 2.3 2.3-.5.5-2.3-2.3ZM4.3 20.7V5.3h3.5V3h.8v2.3h6.9V3h.7v2.3h3.5v15.4ZM5 20h14v-9.2H5Z"/>
    </Icon>
  );
});

IconMaterialEventBusyW100Filled.displayName = 'AmauiIconMaterialEventBusyW100Filled';

export default IconMaterialEventBusyW100Filled;
