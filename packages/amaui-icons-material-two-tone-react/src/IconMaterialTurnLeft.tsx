import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnLeft'

      short_name='TurnLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M6.83,11l1.59,1.59L7,14l-4-4l4-4l1.41,1.41L6.83,9L15,9c1.1,0,2,0.9,2,2v9h-2v-9L6.83,11z"/></g>
    </Icon>
  );
});

IconMaterialTurnLeft.displayName = 'AmauiIconMaterialTurnLeft';

export default IconMaterialTurnLeft;
