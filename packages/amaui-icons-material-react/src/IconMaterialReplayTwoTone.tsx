import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplayTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplayTwoTone'
      short_name='Replay'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><path d="M7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8c0-4.42-3.58-8-8-8V1L7,6z"/></g>
    </Icon>
  );
});

export default IconMaterialReplayTwoTone;
