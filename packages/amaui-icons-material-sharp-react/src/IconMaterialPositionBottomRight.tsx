import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPositionBottomRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionBottomRight'

      short_name='PositionBottomRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M360 776h360V656H360v120ZM120 936V216h720v720H120Zm80-80h560V296H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialPositionBottomRight.displayName = 'AmauiIconMaterialPositionBottomRight';

export default IconMaterialPositionBottomRight;
