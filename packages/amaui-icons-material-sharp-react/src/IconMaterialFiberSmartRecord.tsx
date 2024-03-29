import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberSmartRecord = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberSmartRecord'

      short_name='FiberSmartRecord'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 19q-2.925 0-4.963-2.038Q2 14.925 2 12t2.037-4.963Q6.075 5 9 5q2.925 0 4.963 2.037Q16 9.075 16 12q0 2.925-2.037 4.962Q11.925 19 9 19Zm0-7Zm7 6.9v-2q1.75-.35 2.875-1.725T20 12q0-1.8-1.125-3.175Q17.75 7.45 16 7.1v-2q2.6.35 4.3 2.312Q22 9.375 22 12t-1.7 4.587Q18.6 18.55 16 18.9ZM9 17q2.075 0 3.538-1.463Q14 14.075 14 12t-1.462-3.538Q11.075 7 9 7 6.925 7 5.463 8.462 4 9.925 4 12q0 2.075 1.463 3.537Q6.925 17 9 17Z"/>
    </Icon>
  );
});

IconMaterialFiberSmartRecord.displayName = 'AmauiIconMaterialFiberSmartRecord';

export default IconMaterialFiberSmartRecord;
