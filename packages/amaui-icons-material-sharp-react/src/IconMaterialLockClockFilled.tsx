import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLockClockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockClockFilled'

      short_name='LockClock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6Zm9 15q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23Zm1.65-2.65.7-.7-1.85-1.85V15h-1v3.2ZM4 22V8h3V6q0-2.075 1.463-3.538Q9.925 1 12 1t3.538 1.462Q17 3.925 17 6v2h3v3.3q-.5-.175-1-.238Q18.5 11 18 11q-2.925 0-4.962 2.037Q11 15.075 11 18q0 1.075.338 2.087.337 1.013.912 1.913Z"/>
    </Icon>
  );
});

IconMaterialLockClockFilled.displayName = 'AmauiIconMaterialLockClockFilled';

export default IconMaterialLockClockFilled;
