import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLockClockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockClockW100'

      short_name='LockClock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 9.3h6v-2q0-1.25-.875-2.125T12 4.3q-1.25 0-2.125.875T9 7.3ZM6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2v-8.4q0-.65.425-1.075Q6.15 9.3 6.8 9.3h1.5v-2q0-1.55 1.075-2.625T12 3.6q1.55 0 2.625 1.075T15.7 7.3v2h1.5q.65 0 1.075.425.425.425.425 1.075v1.15q-.125-.05-.313-.075-.187-.025-.387-.025V10.8q0-.35-.225-.575Q17.55 10 17.2 10H6.8q-.35 0-.575.225Q6 10.45 6 10.8v8.4q0 .35.225.575Q6.45 20 6.8 20h5.6q.05.2.15.375.1.175.25.325Zm10.7.5q-1.55 0-2.625-1.075T13.8 17.5q0-1.55 1.075-2.625T17.5 13.8q1.55 0 2.625 1.075T21.2 17.5q0 1.55-1.075 2.625T17.5 21.2Zm1.4-1.8q.1.1.238.112.137.013.262-.112t.125-.25q0-.125-.125-.25l-1.55-1.55V15q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.475q0 .025.125.3ZM6 17.5V20 10v7.5Z"/>
    </Icon>
  );
});

IconMaterialLockClockW100.displayName = 'AmauiIconMaterialLockClockW100';

export default IconMaterialLockClockW100;
