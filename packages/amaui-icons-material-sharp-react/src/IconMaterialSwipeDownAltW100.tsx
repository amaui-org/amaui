import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeDownAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeDownAltW100'

      short_name='SwipeDownAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21.075-3.1-3.1.5-.5 2.25 2.25V13.35q-1.725-.175-2.862-1.4Q7.65 10.725 7.65 9q0-1.8 1.275-3.075Q10.2 4.65 12 4.65q1.8 0 3.075 1.275Q16.35 7.2 16.35 9q0 1.725-1.137 2.95-1.138 1.225-2.863 1.4v6.375l2.25-2.25.5.5Zm0-8.425q1.5 0 2.575-1.075Q15.65 10.5 15.65 9q0-1.5-1.075-2.575Q13.5 5.35 12 5.35q-1.5 0-2.575 1.075Q8.35 7.5 8.35 9q0 1.5 1.075 2.575Q10.5 12.65 12 12.65ZM12 9Z"/>
    </Icon>
  );
});

IconMaterialSwipeDownAltW100.displayName = 'AmauiIconMaterialSwipeDownAltW100';

export default IconMaterialSwipeDownAltW100;
