import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRightPanelCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightPanelCloseW100Filled'

      short_name='RightPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m347 693 118-117-118-117v234ZM200 856h412V296H200v560Zm-28 28V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialRightPanelCloseW100Filled.displayName = 'AmauiIconMaterialRightPanelCloseW100Filled';

export default IconMaterialRightPanelCloseW100Filled;
