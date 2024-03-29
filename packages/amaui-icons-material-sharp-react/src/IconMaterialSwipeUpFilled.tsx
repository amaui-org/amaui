import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeUpFilled'

      short_name='SwipeUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.125 14q-1.25-1.55-1.937-3.45Q3.5 8.65 3.5 6.5q0-.7.075-1.363.075-.662.225-1.312L2.05 5.55 1 4.5 4.5 1 8 4.5 6.95 5.55l-1.625-1.6q-.15.625-.237 1.262Q5 5.85 5 6.5q0 1.825.575 3.45.575 1.625 1.625 2.975Zm9.9 7.975-6.85-2.825.6-1.625 3.8-.75-4.35-9.825q-.25-.575-.037-1.15.212-.575.787-.825.575-.25 1.15-.025t.825.8l2.45 5.475 1.275-.575 6.45.3 2.125 7.375Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpFilled.displayName = 'AmauiIconMaterialSwipeUpFilled';

export default IconMaterialSwipeUpFilled;
