import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockW100Filled'

      short_name='Lock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.7q-.625 0-1.062-.438Q5.3 19.825 5.3 19.2v-8.4q0-.625.438-1.063Q6.175 9.3 6.8 9.3h1.5v-2q0-1.55 1.075-2.625T12 3.6q1.55 0 2.625 1.075T15.7 7.3v2h1.5q.625 0 1.062.437.438.438.438 1.063v8.4q0 .625-.438 1.062-.437.438-1.062.438ZM9 9.3h6v-2q0-1.25-.875-2.125T12 4.3q-1.25 0-2.125.875T9 7.3Zm3 7.05q.575 0 .963-.387.387-.388.387-.963t-.387-.963q-.388-.387-.963-.387t-.962.387q-.388.388-.388.963t.388.963q.387.387.962.387Z"/>
    </Icon>
  );
});

IconMaterialLockW100Filled.displayName = 'AmauiIconMaterialLockW100Filled';

export default IconMaterialLockW100Filled;
