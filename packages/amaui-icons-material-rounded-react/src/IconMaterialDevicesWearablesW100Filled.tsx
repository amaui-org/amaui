import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesWearablesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesWearablesW100Filled'

      short_name='DevicesWearables'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M670 816q61 0 103.5-42.5T816 670q0-61-42.5-103.5T670 524q-61 0-103.5 42.5T524 670q0 61 42.5 103.5T670 816ZM214 924q-24.75 0-42.375-17.625T154 864V288q0-24.75 17.625-42.375T214 228h256q24.75 0 42.375 17.625T530 288v146q-8 5-14.5 9.5T502 453V350H182v452h248q14 29 37 52t49 42q-8.13 13.3-21.804 20.65Q480.522 924 465 924H214Zm382-30v-66q-46-22-73-64.5T496 670q0-51 27-93.5t73-64.5v-66q0-12.75 8.511-21.375Q613.023 416 625.604 416h88.814q12.582 0 21.082 8.625T744 446v66q46 22 73 64.5t27 93.5q0 51-27 93.5T744 828v66q0 12.75-8.511 21.375Q726.977 924 714.396 924h-88.814Q613 924 604.5 915.375T596 894Z"/>
    </Icon>
  );
});

IconMaterialDevicesWearablesW100Filled.displayName = 'AmauiIconMaterialDevicesWearablesW100Filled';

export default IconMaterialDevicesWearablesW100Filled;
