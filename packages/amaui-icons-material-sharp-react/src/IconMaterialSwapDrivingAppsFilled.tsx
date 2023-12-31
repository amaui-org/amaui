import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapDrivingAppsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapDrivingAppsFilled'

      short_name='SwapDrivingApps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m620-660-58-56 44-44H318v-80h288l-44-44 56-58 142 142-140 140ZM300-240q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm360 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM120-480h608l-42-120H274l44 44-56 58-142-142 142-142 56 58-44 44h468l98 280v360H720v-80H240v80H120v-440Z"/>
    </Icon>
  );
});

IconMaterialSwapDrivingAppsFilled.displayName = 'AmauiIconMaterialSwapDrivingAppsFilled';

export default IconMaterialSwapDrivingAppsFilled;
