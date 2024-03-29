import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeftFilled'

      short_name='SwipeLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 7V2h1.5v2.025Q5.25 2.6 7.413 1.8 9.575 1 12 1q4.15 0 6.8 1.912Q21.45 4.825 22 7h-1.575q-.575-1.5-2.712-3Q15.575 2.5 12 2.5q-2.275 0-4.287.8Q5.7 4.1 4.1 5.5H7V7Zm8.125 16L5 17.625l1.2-1.25 3.8.875V6.5q0-.625.438-1.062Q10.875 5 11.5 5t1.062.438Q13 5.875 13 6.5v6h1.4l5.775 2.9L19.1 23Z"/>
    </Icon>
  );
});

IconMaterialSwipeLeftFilled.displayName = 'AmauiIconMaterialSwipeLeftFilled';

export default IconMaterialSwipeLeftFilled;
