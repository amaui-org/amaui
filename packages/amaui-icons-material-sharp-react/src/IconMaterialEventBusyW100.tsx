import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventBusyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventBusyW100'

      short_name='EventBusy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.7 17.475-.5-.5 2.3-2.3-2.3-2.3.5-.5 2.3 2.3 2.3-2.3.5.5-2.3 2.3 2.3 2.3-.5.5-2.3-2.3ZM4.3 20.7V5.3h3.5V3h.8v2.3h6.9V3h.7v2.3h3.5v15.4ZM5 20h14v-9.2H5Zm0-9.9h14V6H5Zm0 0V6v4.1Z"/>
    </Icon>
  );
});

IconMaterialEventBusyW100.displayName = 'AmauiIconMaterialEventBusyW100';

export default IconMaterialEventBusyW100;
