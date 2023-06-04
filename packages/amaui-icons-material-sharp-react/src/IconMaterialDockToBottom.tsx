import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockToBottom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToBottom'

      short_name='DockToBottom'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 856h560V736H200v120Zm0-200h560V296H200v360Zm0 80v120-120Zm-80 200V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialDockToBottom.displayName = 'AmauiIconMaterialDockToBottom';

export default IconMaterialDockToBottom;
