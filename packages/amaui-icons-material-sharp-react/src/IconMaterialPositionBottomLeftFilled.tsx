import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPositionBottomLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionBottomLeftFilled'

      short_name='PositionBottomLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 776h360V656H240v120ZM120 936V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialPositionBottomLeftFilled.displayName = 'AmauiIconMaterialPositionBottomLeftFilled';

export default IconMaterialPositionBottomLeftFilled;
