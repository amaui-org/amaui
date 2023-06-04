import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeftPanelCloseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelCloseW100'

      short_name='LeftPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M613 693V459L495 576l118 117ZM200 856h120V296H200v560Zm148 0h412V296H348v560Zm-28 0H200h120Zm-148 28V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelCloseW100.displayName = 'AmauiIconMaterialLeftPanelCloseW100';

export default IconMaterialLeftPanelCloseW100;
