import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberSmartRecordW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberSmartRecordW100'

      short_name='FiberSmartRecord'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17.7q-2.375 0-4.037-1.662Q3.3 14.375 3.3 12t1.663-4.037Q6.625 6.3 9 6.3t4.038 1.663Q14.7 9.625 14.7 12t-1.662 4.038Q11.375 17.7 9 17.7ZM9 12Zm7 5.6v-.7q1.75-.35 2.875-1.725T20 12q0-1.8-1.125-3.175Q17.75 7.45 16 7.1v-.7q2.05.35 3.375 1.937Q20.7 9.925 20.7 12q0 2.075-1.325 3.662Q18.05 17.25 16 17.6ZM9 17q2.075 0 3.538-1.463Q14 14.075 14 12t-1.462-3.538Q11.075 7 9 7 6.925 7 5.463 8.462 4 9.925 4 12q0 2.075 1.463 3.537Q6.925 17 9 17Z"/>
    </Icon>
  );
});

IconMaterialFiberSmartRecordW100.displayName = 'AmauiIconMaterialFiberSmartRecordW100';

export default IconMaterialFiberSmartRecordW100;
