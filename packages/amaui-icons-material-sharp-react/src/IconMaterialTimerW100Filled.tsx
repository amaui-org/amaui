import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerW100Filled'

      short_name='Timer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 2.35v-.7h5v.7Zm2.15 11.15h.7v-5h-.7Zm.35 7.2q-1.6 0-3-.6t-2.45-1.65Q5.5 17.4 4.9 16q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q7.6 6.5 9 5.9q1.4-.6 3-.6 1.425 0 2.763.525Q16.1 6.35 17.2 7.3l1-1 .5.5-1 1q.95 1.1 1.475 2.437.525 1.338.525 2.763 0 1.6-.6 3t-1.65 2.45Q16.4 19.5 15 20.1q-1.4.6-3 .6Z"/>
    </Icon>
  );
});

IconMaterialTimerW100Filled.displayName = 'AmauiIconMaterialTimerW100Filled';

export default IconMaterialTimerW100Filled;
