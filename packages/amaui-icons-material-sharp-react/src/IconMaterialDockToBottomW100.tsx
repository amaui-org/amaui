import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockToBottomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToBottomW100'

      short_name='DockToBottom'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 856h560V736H200v120Zm0-148h560V296H200v412Zm0 28v120-120Zm-28 148V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialDockToBottomW100.displayName = 'AmauiIconMaterialDockToBottomW100';

export default IconMaterialDockToBottomW100;
