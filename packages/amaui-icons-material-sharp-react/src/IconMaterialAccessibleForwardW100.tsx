import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccessibleForwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibleForwardW100'

      short_name='AccessibleForward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.7 6.1q-.675 0-1.137-.463Q15.1 5.175 15.1 4.5t.463-1.138Q16.025 2.9 16.7 2.9t1.137.462q.463.463.463 1.138 0 .675-.463 1.137-.462.463-1.137.463ZM9.95 21.4q-1.8 0-3.075-1.3Q5.6 18.8 5.6 17t1.288-3.1q1.287-1.3 3.087-1.3v.7q-1.525 0-2.6 1.075Q6.3 15.45 6.3 17t1.075 2.625Q8.45 20.7 10 20.7t2.625-1.075Q13.7 18.55 13.7 17h.7q0 1.8-1.325 3.1T9.95 21.4ZM18 21v-4.35q0-.3-.175-.475T17.35 16h-7.5l3.65-8.1h-2.925l-.825 2.2-.65-.25.75-2.025q.15-.425.438-.625.287-.2.737-.2H14.8q.875 0 1.325.6.45.6.025 1.5l-2.7 5.9h5.25v6Z"/>
    </Icon>
  );
});

IconMaterialAccessibleForwardW100.displayName = 'AmauiIconMaterialAccessibleForwardW100';

export default IconMaterialAccessibleForwardW100;
