import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeftPanelOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelOpen'

      short_name='LeftPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M500 416v320l160-160-160-160ZM200 856h120V296H200v560Zm200 0h360V296H400v560Zm-80 0H200h120Zm-200 80V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelOpen.displayName = 'AmauiIconMaterialLeftPanelOpen';

export default IconMaterialLeftPanelOpen;
