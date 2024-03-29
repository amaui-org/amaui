import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLockClock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockClock'

      short_name='LockClock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6ZM4 22V8h3V6q0-2.075 1.463-3.538Q9.925 1 12 1t3.538 1.462Q17 3.925 17 6v2h3v3.3q-.45-.15-.938-.225Q18.575 11 18 11v-1H6v10h5.3q.2.6.4 1.038.2.437.55.962Zm14 1q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23Zm1.65-2.65.7-.7-1.85-1.85V15h-1v3.2ZM6 10v10-10Z"/>
    </Icon>
  );
});

IconMaterialLockClock.displayName = 'AmauiIconMaterialLockClock';

export default IconMaterialLockClock;
