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
      <path d="M9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6Zm9 15q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23Zm1.3-3q.15.15.35.15.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35l-1.5-1.5v-2.3q0-.2-.15-.35Q18.2 15 18 15q-.2 0-.35.15-.15.15-.15.35V18q0 .05.15.35ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20V10q0-.825.588-1.413Q5.175 8 6 8h1V6q0-2.075 1.463-3.538Q9.925 1 12 1t3.538 1.462Q17 3.925 17 6v2h1q.825 0 1.413.587Q20 9.175 20 10v1.3q-.5-.175-1-.238Q18.5 11 18 11q-2.925 0-4.962 2.037Q11 15.075 11 18q0 1.075.338 2.087.337 1.013.912 1.913Z"/>
    </Icon>
  );
});

IconMaterialLockClockFilled.displayName = 'AmauiIconMaterialLockClockFilled';

export default IconMaterialLockClockFilled;
