import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdfScannerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdfScannerFilled'

      short_name='AdfScanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18v-3q0-1.25.875-2.125T5 12h1V6q0-.825.588-1.412Q7.175 4 8 4h8q.825 0 1.413.588Q18 5.175 18 6v6h1q1.25 0 2.125.875T22 15v3q0 .825-.587 1.413Q20.825 20 20 20Zm4-8h8V6H8Zm10 5q.425 0 .712-.288Q19 16.425 19 16t-.288-.713Q18.425 15 18 15t-.712.287Q17 15.575 17 16t.288.712Q17.575 17 18 17Z"/>
    </Icon>
  );
});

IconMaterialAdfScannerFilled.displayName = 'AmauiIconMaterialAdfScannerFilled';

export default IconMaterialAdfScannerFilled;
