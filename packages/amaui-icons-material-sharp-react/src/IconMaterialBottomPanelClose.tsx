import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomPanelClose = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelClose'

      short_name='BottomPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m480 556 160-160H320l160 160ZM200 856h560V736H200v120Zm0-200h560V296H200v360Zm0 80v120-120Zm-80 200V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelClose.displayName = 'AmauiIconMaterialBottomPanelClose';

export default IconMaterialBottomPanelClose;
