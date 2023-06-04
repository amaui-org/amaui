import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUTurnLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UTurnLeft'

      short_name='UTurnLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M18,9v12h-2V9c0-2.21-1.79-4-4-4S8,6.79,8,9v4.17l1.59-1.59L11,13l-4,4l-4-4l1.41-1.41L6,13.17V9c0-3.31,2.69-6,6-6 S18,5.69,18,9z"/></g>
    </Icon>
  );
});

IconMaterialUTurnLeft.displayName = 'AmauiIconMaterialUTurnLeft';

export default IconMaterialUTurnLeft;
