import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRightPanelCloseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightPanelCloseW100'

      short_name='RightPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m347 693 118-117-118-117v234Zm293 163h120V296H640v560Zm-440 0h412V296H200v560Zm440 0h120-120Zm-468 28V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialRightPanelCloseW100.displayName = 'AmauiIconMaterialRightPanelCloseW100';

export default IconMaterialRightPanelCloseW100;
