import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLockOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockOpenW100Filled'

      short_name='LockOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2v-8.4q0-.65.425-1.075Q6.15 9.3 6.8 9.3H15v-2q0-1.25-.875-2.125T12 4.3q-1.15 0-2 .762-.85.763-.975 1.888Q9 7.1 8.9 7.2t-.25.1q-.15 0-.25-.112-.1-.113-.075-.238Q8.45 5.525 9.5 4.562 10.55 3.6 12 3.6q1.55 0 2.625 1.075T15.7 7.3v2h1.5q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Zm5.2-4.35q.575 0 .963-.387.387-.388.387-.963t-.387-.963q-.388-.387-.963-.387t-.962.387q-.388.388-.388.963t.388.963q.387.387.962.387Z"/>
    </Icon>
  );
});

IconMaterialLockOpenW100Filled.displayName = 'AmauiIconMaterialLockOpenW100Filled';

export default IconMaterialLockOpenW100Filled;
