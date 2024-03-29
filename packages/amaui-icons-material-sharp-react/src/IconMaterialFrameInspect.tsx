import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrameInspect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameInspect'

      short_name='FrameInspect'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M450 636q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm193 160L538 691q-20 13-42.5 19t-45.5 6q-71 0-120.5-49.5T280 546q0-71 49.5-120.5T450 376q71 0 120.5 49.5T620 546q0 23-6.5 45.5T594 634l106 106-57 56ZM120 936V696h80v160h160v80H120Zm480 0v-80h160V696h80v240H600ZM120 456V216h240v80H200v160h-80Zm640 0V296H600v-80h240v240h-80Z"/>
    </Icon>
  );
});

IconMaterialFrameInspect.displayName = 'AmauiIconMaterialFrameInspect';

export default IconMaterialFrameInspect;
