import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeLeftAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeftAltW100Filled'

      short_name='SwipeLeftAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 16.35q-1.725 0-2.95-1.137-1.225-1.138-1.4-2.863H4.275l2.25 2.225-.5.525L2.9 12l3.125-3.125.5.525-2.25 2.25h6.375q.175-1.725 1.4-2.863Q13.275 7.65 15 7.65q1.8 0 3.075 1.275Q19.35 10.2 19.35 12q0 1.8-1.275 3.075Q16.8 16.35 15 16.35Z"/>
    </Icon>
  );
});

IconMaterialSwipeLeftAltW100Filled.displayName = 'AmauiIconMaterialSwipeLeftAltW100Filled';

export default IconMaterialSwipeLeftAltW100Filled;
