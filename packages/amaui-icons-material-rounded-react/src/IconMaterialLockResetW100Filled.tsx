import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLockResetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockResetW100Filled'

      short_name='LockReset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 19.7q-1.35 0-2.625-.463Q9.1 18.775 8.05 17.9q-.125-.1-.137-.25-.013-.15.112-.275.1-.1.237-.1.138 0 .263.1.95.775 2.063 1.2Q11.7 19 13 19q2.925 0 4.962-2.038Q20 14.925 20 12q0-2.9-2.05-4.95Q15.9 5 13 5q-2.9 0-4.95 2.05Q6 9.1 6 12v1.75l2-2.025q.1-.1.25-.1t.25.1q.125.1.113.25-.013.15-.113.25L6.175 14.55q-.125.125-.25.175-.125.05-.275.05-.15 0-.275-.05-.125-.05-.25-.175L2.8 12.225q-.1-.1-.1-.263 0-.162.1-.237.125-.1.25-.088.125.013.225.113L5.3 13.775V12q0-1.6.6-3t1.65-2.45Q8.6 5.5 10 4.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q19.5 7.6 20.1 9q.6 1.4.6 3 0 3.2-2.25 5.45T13 19.7Zm-2-4q-.35 0-.6-.25t-.25-.6v-3q0-.35.288-.6.287-.25.712-.25V9.85q0-.775.538-1.313Q12.225 8 13 8t1.312.537q.538.538.538 1.313V11q.425 0 .712.25.288.25.288.6v3q0 .35-.25.6t-.6.25Zm.85-4.7h2.3V9.85q0-.475-.338-.813Q13.475 8.7 13 8.7q-.475 0-.812.337-.338.338-.338.813Z"/>
    </Icon>
  );
});

IconMaterialLockResetW100Filled.displayName = 'AmauiIconMaterialLockResetW100Filled';

export default IconMaterialLockResetW100Filled;
