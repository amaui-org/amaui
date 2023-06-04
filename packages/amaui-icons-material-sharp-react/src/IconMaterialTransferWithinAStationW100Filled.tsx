import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransferWithinAStationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransferWithinAStationW100Filled'

      short_name='TransferWithinAStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.375 5.1q-.675 0-1.137-.463-.463-.462-.463-1.137t.463-1.138Q8.7 1.9 9.375 1.9t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463Zm-5.65 17.25 2.8-14.55-3.3 1.375v3.175h-.7V8.7L6.95 6.875q.625-.275 1.175-.188.55.088.9.663L10 8.925q.625 1.025 1.75 1.775t2.475.9v.7q-1.325-.125-2.725-.938-1.4-.812-2.45-2.637L8.075 13.7l2.15 2.1v6.55h-.7v-5.575l-3.15-3.025-1.95 8.6Zm12.65-4.15-1.95-1.95 1.95-1.95.5.5-1.1 1.1h5.7v.7h-5.7l1.1 1.1Zm3 4.25-.5-.5 1.1-1.1h-5.7v-.7h5.7l-1.1-1.1.5-.5 1.95 1.95Z"/>
    </Icon>
  );
});

IconMaterialTransferWithinAStationW100Filled.displayName = 'AmauiIconMaterialTransferWithinAStationW100Filled';

export default IconMaterialTransferWithinAStationW100Filled;
