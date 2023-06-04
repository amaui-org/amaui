import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkHistoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkHistoryW100Filled'

      short_name='WorkHistory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V7.3h6V4.6h5.4v2.7h6v5.675q-.625-.35-1.3-.513-.675-.162-1.4-.162-2.375 0-4.037 1.662Q12.3 15.625 12.3 18q0 .425.063.85.062.425.187.85ZM10 7.3h4v-2h-4Zm8 14.4q-1.55 0-2.625-1.075T14.3 18q0-1.55 1.075-2.625T18 14.3q1.55 0 2.625 1.075T21.7 18q0 1.55-1.075 2.625T18 21.7Zm1.65-1.55.5-.5-1.8-1.8v-2.7h-.7v3Z"/>
    </Icon>
  );
});

IconMaterialWorkHistoryW100Filled.displayName = 'AmauiIconMaterialWorkHistoryW100Filled';

export default IconMaterialWorkHistoryW100Filled;
