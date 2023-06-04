import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomPanelCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelCloseW100Filled'

      short_name='BottomPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m480 561 117-118H363l117 118ZM200 708h560V296H200v412Zm-28 176V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelCloseW100Filled.displayName = 'AmauiIconMaterialBottomPanelCloseW100Filled';

export default IconMaterialBottomPanelCloseW100Filled;
