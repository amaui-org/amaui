import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeftPanelClose = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelClose'

      short_name='LeftPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M660 736V416L500 576l160 160ZM200 856h120V296H200v560Zm200 0h360V296H400v560Zm-80 0H200h120Zm-200 80V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelClose.displayName = 'AmauiIconMaterialLeftPanelClose';

export default IconMaterialLeftPanelClose;
