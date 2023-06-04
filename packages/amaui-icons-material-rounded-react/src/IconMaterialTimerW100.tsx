import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerW100'

      short_name='Timer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.85 2.35q-.15 0-.25-.1T9.5 2q0-.15.1-.25t.25-.1h4.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM12 13.5q.15 0 .25-.1t.1-.25v-4.3q0-.15-.1-.25T12 8.5q-.15 0-.25.1t-.1.25v4.3q0 .15.1.25t.25.1Zm0 7.2q-1.6 0-3-.6t-2.45-1.65Q5.5 17.4 4.9 16q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q7.6 6.5 9 5.9q1.4-.6 3-.6 1.425 0 2.763.525Q16.1 6.35 17.2 7.3l.775-.775q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-.75.75q.95 1.1 1.475 2.437.525 1.338.525 2.763 0 1.6-.6 3t-1.65 2.45Q16.4 19.5 15 20.1q-1.4.6-3 .6Zm0-.7q2.9 0 4.95-2.05Q19 15.9 19 13q0-2.9-2.05-4.95Q14.9 6 12 6 9.1 6 7.05 8.05 5 10.1 5 13q0 2.9 2.05 4.95Q9.1 20 12 20Zm0-7Z"/>
    </Icon>
  );
});

IconMaterialTimerW100.displayName = 'AmauiIconMaterialTimerW100';

export default IconMaterialTimerW100;
