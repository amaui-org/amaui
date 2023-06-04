import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccessibleForwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibleForwardW100Filled'

      short_name='AccessibleForward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.7 6.1q-.675 0-1.137-.463Q15.1 5.175 15.1 4.5t.463-1.138Q16.025 2.9 16.7 2.9t1.137.462q.463.463.463 1.138 0 .675-.463 1.137-.462.463-1.137.463ZM9.95 21.4q-1.8 0-3.075-1.3Q5.6 18.8 5.6 17t1.288-3.1q1.287-1.3 3.087-1.3v.7q-1.525 0-2.6 1.075Q6.3 15.45 6.3 17t1.075 2.625Q8.45 20.7 10 20.7t2.625-1.075Q13.7 18.55 13.7 17h.7q0 1.8-1.325 3.1T9.95 21.4Zm8.4-.4q-.15 0-.25-.1t-.1-.25v-4q0-.3-.175-.475T17.35 16H13q-1.1 0-1.7-.938-.6-.937-.15-1.962l2.35-5.2h-2.925l-.7 1.875q-.05.125-.187.187-.138.063-.263.013t-.187-.188q-.063-.137-.013-.262l.625-1.7q.15-.425.438-.625.287-.2.737-.2H14.8q.875 0 1.325.6.45.6.025 1.5l-2.7 5.9h3.85q.575 0 .988.412.412.413.412.988v4.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAccessibleForwardW100Filled.displayName = 'AmauiIconMaterialAccessibleForwardW100Filled';

export default IconMaterialAccessibleForwardW100Filled;
