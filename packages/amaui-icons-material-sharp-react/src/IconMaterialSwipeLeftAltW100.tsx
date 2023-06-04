import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeLeftAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeftAltW100'

      short_name='SwipeLeftAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 16.35q-1.725 0-2.95-1.137-1.225-1.138-1.4-2.863H4.275l2.25 2.225-.5.525L2.9 12l3.125-3.125.5.525-2.25 2.25h6.375q.175-1.725 1.4-2.863Q13.275 7.65 15 7.65q1.8 0 3.075 1.275Q19.35 10.2 19.35 12q0 1.8-1.275 3.075Q16.8 16.35 15 16.35Zm0-.7q1.5 0 2.575-1.075Q18.65 13.5 18.65 12q0-1.5-1.075-2.575Q16.5 8.35 15 8.35q-1.5 0-2.575 1.075Q11.35 10.5 11.35 12q0 1.5 1.075 2.575Q13.5 15.65 15 15.65ZM15 12Z"/>
    </Icon>
  );
});

IconMaterialSwipeLeftAltW100.displayName = 'AmauiIconMaterialSwipeLeftAltW100';

export default IconMaterialSwipeLeftAltW100;
