import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppBlocking = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBlocking'

      short_name='AppBlocking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 16q-1.65 0-2.825-1.175Q14 13.65 14 12q0-1.65 1.175-2.825Q16.35 8 18 8q1.65 0 2.825 1.175Q22 10.35 22 12q0 1.65-1.175 2.825Q19.65 16 18 16Zm0-1.5q.3 0 .587-.075.288-.075.563-.225l-3.35-3.35q-.15.275-.225.562-.075.288-.075.588 0 1.05.725 1.775.725.725 1.775.725Zm2.2-1.35q.15-.275.225-.563.075-.287.075-.587 0-1.05-.725-1.775Q19.05 9.5 18 9.5q-.3 0-.587.075-.288.075-.563.225ZM7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v4h-2V6H7v12h10v-1h2v4q0 .825-.587 1.413Q17.825 23 17 23Zm0-3v1h10v-1ZM7 4h10V3H7Zm0-1v1-1Zm0 18v-1 1Z"/>
    </Icon>
  );
});

IconMaterialAppBlocking.displayName = 'AmauiIconMaterialAppBlocking';

export default IconMaterialAppBlocking;
