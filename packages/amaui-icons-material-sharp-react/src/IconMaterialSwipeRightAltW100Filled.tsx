import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeRightAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRightAltW100Filled'

      short_name='SwipeRightAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16.35q-1.8 0-3.075-1.275Q4.65 13.8 4.65 12q0-1.8 1.275-3.075Q7.2 7.65 9 7.65q1.725 0 2.95 1.137 1.225 1.138 1.4 2.863h6.375l-2.25-2.25.5-.525L21.1 12l-3.125 3.1-.5-.525 2.25-2.225H13.35q-.175 1.725-1.4 2.863Q10.725 16.35 9 16.35Z"/>
    </Icon>
  );
});

IconMaterialSwipeRightAltW100Filled.displayName = 'AmauiIconMaterialSwipeRightAltW100Filled';

export default IconMaterialSwipeRightAltW100Filled;
