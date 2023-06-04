import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberManualRecordW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberManualRecordW100'

      short_name='FiberManualRecord'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12Zm0 5.7q-2.375 0-4.037-1.662Q6.3 14.375 6.3 12t1.663-4.037Q9.625 6.3 12 6.3t4.038 1.663Q17.7 9.625 17.7 12t-1.662 4.038Q14.375 17.7 12 17.7Zm0-.7q2.075 0 3.538-1.463Q17 14.075 17 12t-1.462-3.538Q14.075 7 12 7 9.925 7 8.463 8.462 7 9.925 7 12q0 2.075 1.463 3.537Q9.925 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialFiberManualRecordW100.displayName = 'AmauiIconMaterialFiberManualRecordW100';

export default IconMaterialFiberManualRecordW100;
