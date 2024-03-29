import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeDownFilled'

      short_name='SwipeDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.5 15 1 11.5l1.05-1.05L3.8 12.2q-.15-.65-.225-1.325Q3.5 10.2 3.5 9.5q0-2.15.688-4.05.687-1.9 1.937-3.45L7.2 3.075Q6.15 4.425 5.575 6.05T5 9.5q0 .65.088 1.3.087.65.237 1.275L6.95 10.45 8 11.5Zm11.525 6.975-6.85-2.825.6-1.625 3.8-.75-4.35-9.825q-.25-.575-.037-1.15.212-.575.787-.825.575-.25 1.15-.025t.825.8l2.45 5.475 1.275-.575 6.45.3 2.125 7.375Z"/>
    </Icon>
  );
});

IconMaterialSwipeDownFilled.displayName = 'AmauiIconMaterialSwipeDownFilled';

export default IconMaterialSwipeDownFilled;
