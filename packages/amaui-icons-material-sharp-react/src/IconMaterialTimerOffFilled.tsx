import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimerOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerOffFilled'

      short_name='TimerOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 3V1h6v2Zm10.8 19.6-2.4-2.4q-1.2.875-2.588 1.338Q13.425 22 12 22q-1.85 0-3.488-.712-1.637-.713-2.862-1.938t-1.938-2.862Q3 14.85 3 13q0-1.5.463-2.887Q3.925 8.725 4.8 7.6L1.4 4.2l1.4-1.4 18.4 18.4Zm.15-5.45L13 10.2V8h-2v.2L7.85 5.05q.95-.5 2-.775T12 4q1.5 0 2.938.5 1.437.5 2.712 1.45l1.4-1.4 1.4 1.4-1.4 1.4q.95 1.275 1.45 2.712Q21 11.5 21 13q0 1.05-.262 2.087-.263 1.038-.788 2.063Z"/>
    </Icon>
  );
});

IconMaterialTimerOffFilled.displayName = 'AmauiIconMaterialTimerOffFilled';

export default IconMaterialTimerOffFilled;
