import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifiStatusbarNotConnectedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiStatusbarNotConnectedFilled'

      short_name='SignalWifiStatusbarNotConnected'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21 0 9q2.375-2.425 5.487-3.713Q8.6 4 12 4t6.512 1.287Q21.625 6.575 24 9l-1 1q-.7-.9-1.737-1.45Q20.225 8 19 8q-2.075 0-3.537 1.462Q14 10.925 14 13q0 1.225.55 2.262Q15.1 16.3 16 17Zm7-1q-.425 0-.738-.312-.312-.313-.312-.738t.312-.738q.313-.312.738-.312t.738.312q.312.313.312.738t-.312.738Q19.425 20 19 20Zm-.75-3.2q0-.95.25-1.475.25-.525 1.075-1.35.525-.525.675-.787.15-.263.15-.663 0-.45-.35-.788-.35-.337-.925-.337-.525 0-.975.337-.45.338-.65.913l-1.35-.55q.3-.95 1.1-1.525T19.125 10q1.225 0 2 .725.775.725.775 1.85 0 .575-.25 1.025-.25.45-.95 1.15-.6.6-.75.962-.15.363-.15 1.088Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiStatusbarNotConnectedFilled.displayName = 'AmauiIconMaterialSignalWifiStatusbarNotConnectedFilled';

export default IconMaterialSignalWifiStatusbarNotConnectedFilled;
