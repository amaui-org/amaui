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
      <path d="M300 688q0 14 12 19t22-5l98-98q12-12 12-28t-12-28l-98-98q-10-10-22-5t-12 19v224ZM200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200Zm360-80V296H200v560h360Z"/>
    </Icon>
  );
});

IconMaterialRightPanelCloseFilled.displayName = 'AmauiIconMaterialRightPanelCloseFilled';

export default IconMaterialRightPanelCloseFilled;
