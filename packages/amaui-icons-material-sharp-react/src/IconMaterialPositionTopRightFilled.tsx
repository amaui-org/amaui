import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPositionTopRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionTopRightFilled'

      short_name='PositionTopRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M360 496h360V376H360v120ZM120 936V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialPositionTopRightFilled.displayName = 'AmauiIconMaterialPositionTopRightFilled';

export default IconMaterialPositionTopRightFilled;
