import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomPanelCloseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelCloseW100'

      short_name='BottomPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m480 561 117-118H363l117 118ZM200 856h560V736H200v120Zm0-148h560V296H200v412Zm0 28v120-120Zm-28 148V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelCloseW100.displayName = 'AmauiIconMaterialBottomPanelCloseW100';

export default IconMaterialBottomPanelCloseW100;
