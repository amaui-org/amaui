import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockW100Filled'

      short_name='Dock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 20.9v-.7h6.7v.7ZM7.3 18.2V2.8h9.4v15.4Zm.7-3.05h8v-9.3H8Z"/>
    </Icon>
  );
});

IconMaterialDockW100Filled.displayName = 'AmauiIconMaterialDockW100Filled';

export default IconMaterialDockW100Filled;
