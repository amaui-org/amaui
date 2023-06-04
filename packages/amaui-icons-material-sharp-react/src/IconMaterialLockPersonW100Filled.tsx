import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLockPersonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockPersonW100Filled'

      short_name='LockPerson'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.5 17.5q.625 0 1.062-.438Q19 16.625 19 16t-.438-1.062q-.437-.438-1.062-.438t-1.062.438Q16 15.375 16 16t.438 1.062q.437.438 1.062.438Zm0 3q.775 0 1.413-.363.637-.362 1.062-.962-.55-.325-1.175-.5t-1.3-.175q-.675 0-1.3.175t-1.175.5q.425.6 1.063.962.637.363 1.412.363ZM9 9.3h6v-2q0-1.25-.875-2.125T12 4.3q-1.25 0-2.125.875T9 7.3Zm8.5 11.9q-1.55 0-2.625-1.075T13.8 17.5q0-1.55 1.075-2.625T17.5 13.8q1.55 0 2.625 1.075T21.2 17.5q0 1.55-1.075 2.625T17.5 21.2Zm-12.2-.5V9.3h3v-2q0-1.55 1.075-2.625T12 3.6q1.55 0 2.625 1.075T15.7 7.3v2h3v2.65q-.3-.125-.6-.125h-.625q-2.35 0-4.012 1.663Q11.8 15.15 11.8 17.5q0 .875.188 1.725.187.85.812 1.475Z"/>
    </Icon>
  );
});

IconMaterialLockPersonW100Filled.displayName = 'AmauiIconMaterialLockPersonW100Filled';

export default IconMaterialLockPersonW100Filled;
