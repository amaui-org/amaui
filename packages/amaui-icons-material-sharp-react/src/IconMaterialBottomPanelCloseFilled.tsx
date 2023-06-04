import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomPanelCloseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelCloseFilled'

      short_name='BottomPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m480 556 160-160H320l160 160ZM200 656h560V296H200v360Zm-80 280V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelCloseFilled.displayName = 'AmauiIconMaterialBottomPanelCloseFilled';

export default IconMaterialBottomPanelCloseFilled;
