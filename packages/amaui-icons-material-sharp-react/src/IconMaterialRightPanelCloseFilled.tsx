import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRightPanelCloseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightPanelCloseFilled'

      short_name='RightPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m300 736 160-160-160-160v320ZM200 856h360V296H200v560Zm-80 80V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialRightPanelCloseFilled.displayName = 'AmauiIconMaterialRightPanelCloseFilled';

export default IconMaterialRightPanelCloseFilled;
