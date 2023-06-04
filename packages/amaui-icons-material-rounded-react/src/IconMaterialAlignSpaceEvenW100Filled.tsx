import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignSpaceEvenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceEvenW100Filled'

      short_name='AlignSpaceEven'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M336 750q-12.75 0-21.375-8.625T306 720v-8q0-12.75 8.625-21.375T336 682h288q12.75 0 21.375 8.625T654 712v8q0 12.75-8.625 21.375T624 750H336Zm0-280q-12.75 0-21.375-8.625T306 440v-8q0-12.75 8.625-21.375T336 402h288q12.75 0 21.375 8.625T654 432v8q0 12.75-8.625 21.375T624 470H336ZM146 924q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h668q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 920q-4.025 4-9.975 4H146Zm0-668q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h668q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 252q-4.025 4-9.975 4H146Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceEvenW100Filled.displayName = 'AmauiIconMaterialAlignSpaceEvenW100Filled';

export default IconMaterialAlignSpaceEvenW100Filled;
