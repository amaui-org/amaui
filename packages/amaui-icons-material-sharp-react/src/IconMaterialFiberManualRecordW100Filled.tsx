import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberManualRecordW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberManualRecordW100Filled'

      short_name='FiberManualRecord'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.7q-2.375 0-4.037-1.662Q6.3 14.375 6.3 12t1.663-4.037Q9.625 6.3 12 6.3t4.038 1.663Q17.7 9.625 17.7 12t-1.662 4.038Q14.375 17.7 12 17.7Z"/>
    </Icon>
  );
});

IconMaterialFiberManualRecordW100Filled.displayName = 'AmauiIconMaterialFiberManualRecordW100Filled';

export default IconMaterialFiberManualRecordW100Filled;
