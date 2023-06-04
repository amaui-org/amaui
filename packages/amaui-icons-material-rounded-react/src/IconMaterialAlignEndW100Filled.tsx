import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignEndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignEndW100Filled'

      short_name='AlignEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M146 924q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h668q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 920q-4.025 4-9.975 4H146Zm190-414q-12.75 0-21.375-8.625T306 480v-8q0-12.75 8.625-21.375T336 442h288q12.75 0 21.375 8.625T654 472v8q0 12.75-8.625 21.375T624 510H336Zm0 240q-12.75 0-21.375-8.625T306 720v-8q0-12.75 8.625-21.375T336 682h288q12.75 0 21.375 8.625T654 712v8q0 12.75-8.625 21.375T624 750H336Z"/>
    </Icon>
  );
});

IconMaterialAlignEndW100Filled.displayName = 'AmauiIconMaterialAlignEndW100Filled';

export default IconMaterialAlignEndW100Filled;
