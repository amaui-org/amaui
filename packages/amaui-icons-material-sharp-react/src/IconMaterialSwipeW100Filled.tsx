import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeW100Filled'

      short_name='Swipe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.8 6.2V2h.7v2.9q1.8-1.5 3.975-2.35Q9.65 1.7 12 1.7q2.35 0 4.525.837Q18.7 3.375 20.5 4.9V2h.7v4.2H17v-.7h3.15q-1.775-1.4-3.825-2.25Q14.275 2.4 12 2.4q-2.275 0-4.325.85-2.05.85-3.825 2.25H7v.7Zm7.45 15.5-4.5-4.45.75-.75 3.8.75V7.5q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.2l4.8 2.35-1.15 6.55Z"/>
    </Icon>
  );
});

IconMaterialSwipeW100Filled.displayName = 'AmauiIconMaterialSwipeW100Filled';

export default IconMaterialSwipeW100Filled;
