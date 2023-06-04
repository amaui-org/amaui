import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimerOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerOffW100Filled'

      short_name='TimerOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.025 16.175-6.65-6.65V8.85q0-.15-.1-.25t-.25-.1q-.125 0-.237.087-.113.088-.113.238L8.85 6q.725-.35 1.55-.525.825-.175 1.625-.175 1.4 0 2.725.512 1.325.513 2.45 1.488l.775-.775q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-.75.75q.975 1.125 1.5 2.462.525 1.338.525 2.738 0 .8-.175 1.625t-.525 1.55Zm-7 4.525q-1.6 0-3-.6t-2.45-1.65Q5.525 17.4 4.925 16q-.6-1.4-.6-3 0-1.55.575-2.95.575-1.4 1.675-2.5L3.25 4.225q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125L20.3 20.275q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-2.3-2.3q-1.025 1.05-2.463 1.65-1.437.6-2.987.6ZM9.875 2.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialTimerOffW100Filled.displayName = 'AmauiIconMaterialTimerOffW100Filled';

export default IconMaterialTimerOffW100Filled;
