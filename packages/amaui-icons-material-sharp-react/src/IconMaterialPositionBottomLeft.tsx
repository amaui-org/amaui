import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPositionBottomLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionBottomLeft'

      short_name='PositionBottomLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 776h360V656H240v120ZM120 936V216h720v720H120Zm80-80h560V296H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialPositionBottomLeft.displayName = 'AmauiIconMaterialPositionBottomLeft';

export default IconMaterialPositionBottomLeft;
