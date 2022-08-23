import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplayCircleFilledTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplayCircleFilledTwoTone'
      short_name='ReplayCircleFilled'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M18,12.5c0,3.31-2.69,6-6,6s-6-2.69-6-6h2 c0,2.21,1.79,4,4,4s4-1.79,4-4s-1.79-4-4-4v3l-4-4l4-4v3C15.31,6.5,18,9.19,18,12.5z"/></g>
    </Icon>
  );
});

IconMaterialReplayCircleFilledTwoTone.displayName = 'AmauiIconMaterialReplayCircleFilledTwoTone';

export default IconMaterialReplayCircleFilledTwoTone;
