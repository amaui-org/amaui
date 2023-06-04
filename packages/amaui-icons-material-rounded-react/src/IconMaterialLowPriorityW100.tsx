import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLowPriorityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowPriorityW100'

      short_name='LowPriority'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 6.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 5.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 5.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-6.9 2.2q-.125-.125-.125-.25t.125-.25l1.7-1.7H8.5q-2.425 0-4.137-1.713Q2.65 13.925 2.65 11.5t1.713-4.138Q6.075 5.65 8.5 5.65h2.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H8.5q-2.15 0-3.65 1.5t-1.5 3.65q0 2.15 1.5 3.65t3.65 1.5h1.3l-1.725-1.725q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l2.025 2.025q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-2.05 2.05q-.1.1-.225.1t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialLowPriorityW100.displayName = 'AmauiIconMaterialLowPriorityW100';

export default IconMaterialLowPriorityW100;
