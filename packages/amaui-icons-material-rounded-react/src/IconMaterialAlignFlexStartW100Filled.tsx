import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignFlexStartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexStartW100Filled'

      short_name='AlignFlexStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M146 256q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h668q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 252q-4.025 4-9.975 4H146Zm330 640q-12.75 0-21.375-8.625T446 866V418q0-12.75 8.625-21.375T476 388h8q12.75 0 21.375 8.625T514 418v448q0 12.75-8.625 21.375T484 896h-8Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexStartW100Filled.displayName = 'AmauiIconMaterialAlignFlexStartW100Filled';

export default IconMaterialAlignFlexStartW100Filled;
