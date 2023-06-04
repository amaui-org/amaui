import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRightPanelClose = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightPanelClose'

      short_name='RightPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m300 736 160-160-160-160v320Zm340 120h120V296H640v560Zm-440 0h360V296H200v560Zm440 0h120-120Zm-520 80V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialRightPanelClose.displayName = 'AmauiIconMaterialRightPanelClose';

export default IconMaterialRightPanelClose;
