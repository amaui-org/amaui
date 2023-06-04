import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLockOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockOpenW100'

      short_name='LockOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V9.3H15v-2q0-1.25-.875-2.125T12 4.3q-1.25 0-2.125.875T9 7.3h-.7q0-1.55 1.075-2.625T12 3.6q1.55 0 2.625 1.075T15.7 7.3v2h3v11.4ZM6 20h12V10H6Zm6-3.65q.575 0 .963-.387.387-.388.387-.963t-.387-.963q-.388-.387-.963-.387t-.962.387q-.388.388-.388.963t.388.963q.387.387.962.387ZM6 20V10v10Z"/>
    </Icon>
  );
});

IconMaterialLockOpenW100.displayName = 'AmauiIconMaterialLockOpenW100';

export default IconMaterialLockOpenW100;
