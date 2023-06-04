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
      <path d="M13 19.7q-1.45 0-2.8-.537-1.35-.538-2.45-1.513l.525-.5q1 .875 2.163 1.362Q11.6 19 13 19q2.925 0 4.962-2.038Q20 14.925 20 12q0-2.9-2.05-4.95Q15.9 5 13 5q-2.9 0-4.95 2.05Q6 9.1 6 12v1.75l2.25-2.25.5.475-3.1 3.1-3.1-3.1.5-.475 2.25 2.275V12q0-1.6.6-3t1.65-2.45Q8.6 5.5 10 4.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q19.5 7.6 20.1 9q.6 1.4.6 3 0 3.2-2.25 5.45T13 19.7Zm-2.85-4V11h1V9.85q0-.775.538-1.313Q12.225 8 13 8t1.312.537q.538.538.538 1.313V11h1v4.7Zm1.7-4.7h2.3V9.85q0-.475-.338-.813Q13.475 8.7 13 8.7q-.475 0-.812.337-.338.338-.338.813Z"/>
    </Icon>
  );
});

IconMaterialLockResetW100Filled.displayName = 'AmauiIconMaterialLockResetW100Filled';

export default IconMaterialLockResetW100Filled;
