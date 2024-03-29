import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerFilled'

      short_name='Timer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 3V1h6v2Zm2 11h2V8h-2Zm1 8q-1.85 0-3.488-.712-1.637-.713-2.862-1.938t-1.938-2.862Q3 14.85 3 13t.712-3.488Q4.425 7.875 5.65 6.65t2.862-1.937Q10.15 4 12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4 1.4 1.4-1.4 1.4Q20 8.6 20.5 10.025 21 11.45 21 13q0 1.85-.712 3.488-.713 1.637-1.938 2.862t-2.862 1.938Q13.85 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialTimerFilled.displayName = 'AmauiIconMaterialTimerFilled';

export default IconMaterialTimerFilled;
