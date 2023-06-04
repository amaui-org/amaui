import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignSpaceAroundW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceAroundW100Filled'

      short_name='AlignSpaceAround'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M336 790q-12.75 0-21.375-8.625T306 760v-8q0-12.75 8.625-21.375T336 722h288q12.75 0 21.375 8.625T654 752v8q0 12.75-8.625 21.375T624 790H336Zm0-360q-12.75 0-21.375-8.625T306 400v-8q0-12.75 8.625-21.375T336 362h288q12.75 0 21.375 8.625T654 392v8q0 12.75-8.625 21.375T624 430H336ZM146 924q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h668q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 920q-4.025 4-9.975 4H146Zm0-668q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h668q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 252q-4.025 4-9.975 4H146Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceAroundW100Filled.displayName = 'AmauiIconMaterialAlignSpaceAroundW100Filled';

export default IconMaterialAlignSpaceAroundW100Filled;
