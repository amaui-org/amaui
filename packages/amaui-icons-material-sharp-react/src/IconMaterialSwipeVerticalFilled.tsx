import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeVerticalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeVerticalFilled'

      short_name='SwipeVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 22v-1.5h2.025Q1.6 18.75.8 16.587 0 14.425 0 12t.8-4.588Q1.6 5.25 3.025 3.5H1V2h5v5H4.5V4.1Q3.1 5.675 2.3 7.7q-.8 2.025-.8 4.3t.8 4.288Q3.1 18.3 4.5 19.9V17H6v5Zm15.025-.025-6.85-2.825.6-1.625 3.8-.75-4.35-9.825q-.25-.575-.037-1.15.212-.575.787-.825.575-.25 1.15-.025t.825.8l2.45 5.475 1.275-.575 6.45.3 2.125 7.375Z"/>
    </Icon>
  );
});

IconMaterialSwipeVerticalFilled.displayName = 'AmauiIconMaterialSwipeVerticalFilled';

export default IconMaterialSwipeVerticalFilled;
