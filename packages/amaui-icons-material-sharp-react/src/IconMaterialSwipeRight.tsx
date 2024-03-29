import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRight'

      short_name='SwipeRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 7q.55-2.175 3.2-4.088Q7.85 1 12 1q2.425 0 4.587.8 2.163.8 3.913 2.225V2H22v5h-5V5.5h2.9q-1.6-1.4-3.612-2.2-2.013-.8-4.288-.8-3.575 0-5.712 1.5Q4.15 5.5 3.575 7Zm7.7 16-5.75-5.75L6.125 15 9 15.65V7.5q0-1.05.725-1.775Q10.45 5 11.5 5q1.05 0 1.775.725Q14 6.45 14 7.5v4.3h.8l5.3 2.575L18.675 23Zm.85-2h6.4l.95-5.45-4.15-2.05H12v-6q0-.225-.137-.363Q11.725 7 11.5 7q-.225 0-.363.137Q11 7.275 11 7.5v10.6l-4.25-.9Zm0 0h6.4Z"/>
    </Icon>
  );
});

IconMaterialSwipeRight.displayName = 'AmauiIconMaterialSwipeRight';

export default IconMaterialSwipeRight;
