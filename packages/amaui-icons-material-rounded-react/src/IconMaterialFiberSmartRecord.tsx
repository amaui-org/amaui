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
      <path d="M9 19q-2.925 0-4.963-2.038Q2 14.925 2 12t2.037-4.963Q6.075 5 9 5q2.925 0 4.963 2.037Q16 9.075 16 12q0 2.925-2.037 4.962Q11.925 19 9 19Zm0-7Zm8.5 6.525q-.575.2-1.038-.037Q16 18.25 16 17.6q0-.275.188-.525.187-.25.462-.35 1.5-.5 2.425-1.8Q20 13.625 20 12q0-1.625-.925-2.925-.925-1.3-2.425-1.8-.275-.1-.462-.35Q16 6.675 16 6.4q0-.625.45-.875t1.025-.05Q19.5 6.2 20.75 7.987 22 9.775 22 12q0 2.225-1.25 4t-3.25 2.525ZM9 17q2.075 0 3.538-1.463Q14 14.075 14 12t-1.462-3.538Q11.075 7 9 7 6.925 7 5.463 8.462 4 9.925 4 12q0 2.075 1.463 3.537Q6.925 17 9 17Z"/>
    </Icon>
  );
});

IconMaterialFiberSmartRecord.displayName = 'AmauiIconMaterialFiberSmartRecord';

export default IconMaterialFiberSmartRecord;
