import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberSmartRecordW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberSmartRecordW100Filled'

      short_name='FiberSmartRecord'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17.7q-2.375 0-4.037-1.662Q3.3 14.375 3.3 12t1.663-4.037Q6.625 6.3 9 6.3t4.038 1.663Q14.7 9.625 14.7 12t-1.662 4.038Q11.375 17.7 9 17.7Zm7-.525q0-.125.075-.2.075-.075.2-.125 1.65-.425 2.687-1.775Q20 13.725 20 12t-1.038-3.075q-1.037-1.35-2.687-1.775-.125-.05-.2-.138Q16 6.925 16 6.8q0-.175.113-.275.112-.1.287-.05 1.9.475 3.1 2.012 1.2 1.538 1.2 3.513 0 1.975-1.2 3.512-1.2 1.538-3.1 2.013-.175.05-.287-.063Q16 17.35 16 17.175Z"/>
    </Icon>
  );
});

IconMaterialFiberSmartRecordW100Filled.displayName = 'AmauiIconMaterialFiberSmartRecordW100Filled';

export default IconMaterialFiberSmartRecordW100Filled;
