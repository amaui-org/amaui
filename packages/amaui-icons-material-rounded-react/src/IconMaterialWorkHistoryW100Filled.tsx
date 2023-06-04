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
      <path d="M12.3 18q0 .425.063.85.062.425.187.85H4.8q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V8.8q0-.65.425-1.075Q4.15 7.3 4.8 7.3h4.5V6.1q0-.65.425-1.075Q10.15 4.6 10.8 4.6h2.4q.65 0 1.075.425.425.425.425 1.075v1.2h4.5q.65 0 1.075.425.425.425.425 1.075v4.175q-.625-.35-1.3-.513-.675-.162-1.4-.162-2.375 0-4.037 1.662Q12.3 15.625 12.3 18ZM10 7.3h4V6.1q0-.35-.225-.575Q13.55 5.3 13.2 5.3h-2.4q-.35 0-.575.225Q10 5.75 10 6.1Zm8 14.4q-1.55 0-2.625-1.075T14.3 18q0-1.55 1.075-2.625T18 14.3q1.55 0 2.625 1.075T21.7 18q0 1.55-1.075 2.625T18 21.7Zm1.65-1.55.5-.5-1.8-1.8v-2.7h-.7v3Z"/>
    </Icon>
  );
});

IconMaterialWorkHistoryW100Filled.displayName = 'AmauiIconMaterialWorkHistoryW100Filled';

export default IconMaterialWorkHistoryW100Filled;
