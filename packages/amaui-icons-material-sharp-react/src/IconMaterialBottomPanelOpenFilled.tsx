import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomPanelOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelOpenFilled'

      short_name='BottomPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 556h320L480 396 320 556ZM200 656h560V296H200v360Zm-80 280V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelOpenFilled.displayName = 'AmauiIconMaterialBottomPanelOpenFilled';

export default IconMaterialBottomPanelOpenFilled;
