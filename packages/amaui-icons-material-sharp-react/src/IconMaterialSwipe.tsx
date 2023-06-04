import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Swipe'

      short_name='Swipe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 7V2h1.5v2q1.8-1.475 3.975-2.238Q9.65 1 12 1q2.35 0 4.525.762Q18.7 2.525 20.5 4V2H22v5h-5V5.5h2.9q-1.65-1.45-3.675-2.225Q14.2 2.5 12 2.5q-2.2 0-4.225.775Q5.75 4.05 4.1 5.5H7V7Zm7.7 16-5.75-5.75L6.125 15 9 15.65V7.5q0-1.05.725-1.775Q10.45 5 11.5 5q1.05 0 1.775.725Q14 6.45 14 7.5v4.3h.8l5.3 2.575L18.675 23Zm.85-2h6.4l.95-5.45-4.15-2.05H12v-6q0-.225-.137-.363Q11.725 7 11.5 7q-.225 0-.363.137Q11 7.275 11 7.5v10.6l-4.25-.9Zm0 0h6.4Z"/>
    </Icon>
  );
});

IconMaterialSwipe.displayName = 'AmauiIconMaterialSwipe';

export default IconMaterialSwipe;
