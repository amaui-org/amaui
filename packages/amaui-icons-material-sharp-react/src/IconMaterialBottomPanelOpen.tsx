import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomPanelOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelOpen'

      short_name='BottomPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 556h320L480 396 320 556ZM200 856h560V736H200v120Zm0-200h560V296H200v360Zm0 80v120-120Zm-80 200V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelOpen.displayName = 'AmauiIconMaterialBottomPanelOpen';

export default IconMaterialBottomPanelOpen;
