import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockToBottomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToBottomFilled'

      short_name='DockToBottom'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 656h560V296H200v360Zm-80 280V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialDockToBottomFilled.displayName = 'AmauiIconMaterialDockToBottomFilled';

export default IconMaterialDockToBottomFilled;
