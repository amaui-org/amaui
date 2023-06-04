import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifyCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyCenterW100Filled'

      short_name='AlignJustifyCenter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M479.965 924Q474 924 470 919.975T466 910V242q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v668q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM616 750q-12.75 0-21.375-8.625T586 720V432q0-12.75 8.625-21.375T616 402h8q12.75 0 21.375 8.625T654 432v288q0 12.75-8.625 21.375T624 750h-8Zm-280 0q-12.75 0-21.375-8.625T306 720V432q0-12.75 8.625-21.375T336 402h8q12.75 0 21.375 8.625T374 432v288q0 12.75-8.625 21.375T344 750h-8Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyCenterW100Filled.displayName = 'AmauiIconMaterialAlignJustifyCenterW100Filled';

export default IconMaterialAlignJustifyCenterW100Filled;
