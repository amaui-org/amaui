import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnoozeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnoozeW100Filled'

      short_name='Snooze'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.375 15.6h3.375q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.225-.1H10.8l3.125-3.5q.1-.1.137-.225.038-.125.038-.25 0-.225-.15-.375t-.375-.15H10.25q-.15 0-.25.1t-.1.25q0 .15.1.25t.225.1h3.025l-3.175 3.55q-.1.1-.137.225-.038.125-.038.25 0 .2.138.337.137.138.337.138ZM12 20.7q-1.6 0-3-.6t-2.45-1.65Q5.5 17.4 4.9 16q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q7.6 6.5 9 5.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q18.5 8.6 19.1 10q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45Q16.4 19.5 15 20.1q-1.4.6-3 .6ZM3.475 7.275q-.1.1-.225.1T3 7.25q-.125-.125-.125-.25T3 6.75l2.775-2.775q.1-.1.225-.1T6.25 4q.125.125.125.25t-.125.25ZM20.5 7.25l-2.775-2.775q-.1-.1-.1-.225T17.75 4q.125-.125.25-.125t.25.125l2.775 2.775q.1.1.1.225T21 7.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialSnoozeW100Filled.displayName = 'AmauiIconMaterialSnoozeW100Filled';

export default IconMaterialSnoozeW100Filled;
