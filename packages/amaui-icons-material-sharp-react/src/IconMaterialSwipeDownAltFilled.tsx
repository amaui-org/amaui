import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeDownAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeDownAltFilled'

      short_name='SwipeDownAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 22-4-4 1.4-1.425 1.6 1.6V13.9q-1.725-.35-2.863-1.712Q7 10.825 7 9q0-2.075 1.463-3.537Q9.925 4 12 4t3.538 1.463Q17 6.925 17 9q0 1.825-1.137 3.188Q14.725 13.55 13 13.9v4.275l1.6-1.575L16 18Z"/>
    </Icon>
  );
});

IconMaterialSwipeDownAltFilled.displayName = 'AmauiIconMaterialSwipeDownAltFilled';

export default IconMaterialSwipeDownAltFilled;
