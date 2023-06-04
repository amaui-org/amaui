import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLockClockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockClockW100Filled'

      short_name='LockClock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 9.3h6v-2q0-1.25-.875-2.125T12 4.3q-1.25 0-2.125.875T9 7.3Zm8.5 11.9q-1.55 0-2.625-1.075T13.8 17.5q0-1.55 1.075-2.625T17.5 13.8q1.55 0 2.625 1.075T21.2 17.5q0 1.55-1.075 2.625T17.5 21.2Zm1.4-1.8q.1.1.238.112.137.013.262-.112t.125-.25q0-.125-.125-.25l-1.55-1.55V15q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.475q0 .025.125.3ZM6.8 20.7q-.625 0-1.062-.438Q5.3 19.825 5.3 19.2v-8.4q0-.625.438-1.063Q6.175 9.3 6.8 9.3h1.5v-2q0-1.55 1.075-2.625T12 3.6q1.55 0 2.625 1.075T15.7 7.3v2h1.5q.625 0 1.062.437.438.438.438 1.063v1.15q-.3-.125-.6-.125h-.625q-2.35 0-4.012 1.663Q11.8 15.15 11.8 17.5q0 .875.188 1.725.187.85.812 1.475Z"/>
    </Icon>
  );
});

IconMaterialLockClockW100Filled.displayName = 'AmauiIconMaterialLockClockW100Filled';

export default IconMaterialLockClockW100Filled;
