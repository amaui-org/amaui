import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorW100Filled'

      short_name='Floor'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M286 922V772q0-12.75 8.625-21.375T316 742h150V592q0-12.75 8.625-21.375T496 562h150V412q0-12.75 8.625-21.375T676 382h150V256q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v124q0 12.75-8.625 21.375T824 410H674v150q0 12.75-8.625 21.375T644 590H494v150q0 12.75-8.625 21.375T464 770H314v150q0 12.75-8.625 21.375T284 950H160q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h126Z"/>
    </Icon>
  );
});

IconMaterialFloorW100Filled.displayName = 'AmauiIconMaterialFloorW100Filled';

export default IconMaterialFloorW100Filled;
