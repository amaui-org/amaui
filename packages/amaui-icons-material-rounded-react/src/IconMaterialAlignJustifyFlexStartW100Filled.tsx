import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifyFlexStartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyFlexStartW100Filled'

      short_name='AlignJustifyFlexStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M145.965 924Q140 924 136 919.975T132 910V242q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v668q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM576 750q-12.75 0-21.375-8.625T546 720V432q0-12.75 8.625-21.375T576 402h8q12.75 0 21.375 8.625T614 432v288q0 12.75-8.625 21.375T584 750h-8Zm-240 0q-12.75 0-21.375-8.625T306 720V432q0-12.75 8.625-21.375T336 402h8q12.75 0 21.375 8.625T374 432v288q0 12.75-8.625 21.375T344 750h-8Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyFlexStartW100Filled.displayName = 'AmauiIconMaterialAlignJustifyFlexStartW100Filled';

export default IconMaterialAlignJustifyFlexStartW100Filled;
