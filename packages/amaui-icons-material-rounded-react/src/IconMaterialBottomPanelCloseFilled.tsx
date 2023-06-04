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
      <path d="m508 528 98-98q10-10 5-22t-19-12H368q-14 0-19 12t5 22l98 98q12 12 28 12t28-12Zm252-312q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560Zm0 440V296H200v360h560Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelCloseFilled.displayName = 'AmauiIconMaterialBottomPanelCloseFilled';

export default IconMaterialBottomPanelCloseFilled;
