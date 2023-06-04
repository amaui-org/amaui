import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidgetsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetsW100Filled'

      short_name='Widgets'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.2 11.65-3.8-3.8 3.8-3.8 3.8 3.8ZM5.1 10.5V5.1h5.4v5.4Zm8.4 8.4v-5.4h5.4v5.4Zm-8.4 0v-5.4h5.4v5.4Z"/>
    </Icon>
  );
});

IconMaterialWidgetsW100Filled.displayName = 'AmauiIconMaterialWidgetsW100Filled';

export default IconMaterialWidgetsW100Filled;
