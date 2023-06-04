import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeskW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskW100Filled'

      short_name='Desk'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.4 17.35V7.4h17.2v9.95h-.7v-2h-4.925v2h-.7V8.1H4.1v9.25Zm11.575-6.7H19.9V8.1h-4.925Zm0 4H19.9v-3.3h-4.925Z"/>
    </Icon>
  );
});

IconMaterialDeskW100Filled.displayName = 'AmauiIconMaterialDeskW100Filled';

export default IconMaterialDeskW100Filled;
