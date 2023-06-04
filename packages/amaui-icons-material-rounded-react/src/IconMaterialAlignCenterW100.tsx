import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignCenterW100'

      short_name='AlignCenter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M146 590q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h668q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 586q-4.025 4-9.975 4H146Zm190-120q-12.75 0-21.375-8.625T306 440v-8q0-12.75 8.625-21.375T336 402h288q12.75 0 21.375 8.625T654 432v8q0 12.75-8.625 21.375T624 470H336Zm0 280q-12.75 0-21.375-8.625T306 720v-8q0-12.75 8.625-21.375T336 682h288q12.75 0 21.375 8.625T654 712v8q0 12.75-8.625 21.375T624 750H336Z"/>
    </Icon>
  );
});

IconMaterialAlignCenterW100.displayName = 'AmauiIconMaterialAlignCenterW100';

export default IconMaterialAlignCenterW100;
