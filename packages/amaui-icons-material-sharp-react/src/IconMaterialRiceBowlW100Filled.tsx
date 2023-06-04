import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRiceBowlW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RiceBowlW100Filled'

      short_name='RiceBowl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 20.7v-1.325q-2.475-.975-4.238-2.888Q3.3 14.575 3.3 12q0-1.8.687-3.388.688-1.587 1.863-2.762t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 2.575-1.762 4.487-1.763 1.913-4.238 2.888V20.7Zm.05-8.7h5.3V4.45q-.625-.225-1.287-.338Q12.7 4 12 4t-1.362.112q-.663.113-1.288.338ZM4 12h4.65V4.725q-2.075.95-3.363 2.9Q4 9.575 4 12Zm11.35 0H20q0-2.425-1.288-4.375-1.287-1.95-3.362-2.9Z"/>
    </Icon>
  );
});

IconMaterialRiceBowlW100Filled.displayName = 'AmauiIconMaterialRiceBowlW100Filled';

export default IconMaterialRiceBowlW100Filled;
