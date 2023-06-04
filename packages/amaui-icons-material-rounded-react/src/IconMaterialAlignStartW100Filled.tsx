import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignStartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignStartW100Filled'

      short_name='AlignStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M146 256q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h668q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 252q-4.025 4-9.975 4H146Zm190 214q-12.75 0-21.375-8.625T306 440v-8q0-12.75 8.625-21.375T336 402h288q12.75 0 21.375 8.625T654 432v8q0 12.75-8.625 21.375T624 470H336Zm0 240q-12.75 0-21.375-8.625T306 680v-8q0-12.75 8.625-21.375T336 642h288q12.75 0 21.375 8.625T654 672v8q0 12.75-8.625 21.375T624 710H336Z"/>
    </Icon>
  );
});

IconMaterialAlignStartW100Filled.displayName = 'AmauiIconMaterialAlignStartW100Filled';

export default IconMaterialAlignStartW100Filled;
