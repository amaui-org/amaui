import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockToBottomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToBottomW100Filled'

      short_name='DockToBottom'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 708h560V296H200v412Zm-28 176V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialDockToBottomW100Filled.displayName = 'AmauiIconMaterialDockToBottomW100Filled';

export default IconMaterialDockToBottomW100Filled;
