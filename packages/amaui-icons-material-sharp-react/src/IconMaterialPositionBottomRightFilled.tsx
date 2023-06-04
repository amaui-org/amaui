import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPositionBottomRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionBottomRightFilled'

      short_name='PositionBottomRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M360 776h360V656H360v120ZM120 936V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialPositionBottomRightFilled.displayName = 'AmauiIconMaterialPositionBottomRightFilled';

export default IconMaterialPositionBottomRightFilled;
