import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeftPanelCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelCloseW100Filled'

      short_name='LeftPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M613 693V459L495 576l118 117ZM348 856h412V296H348v560Zm-176 28V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelCloseW100Filled.displayName = 'AmauiIconMaterialLeftPanelCloseW100Filled';

export default IconMaterialLeftPanelCloseW100Filled;
