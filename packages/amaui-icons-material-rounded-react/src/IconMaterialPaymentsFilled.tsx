import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPaymentsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentsFilled'

      short_name='Payments'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 13q1.25 0 2.125-.875T17 10q0-1.25-.875-2.125T14 7q-1.25 0-2.125.875T11 10q0 1.25.875 2.125T14 13Zm-7 3q-.825 0-1.412-.588Q5 14.825 5 14V6q0-.825.588-1.412Q6.175 4 7 4h14q.825 0 1.413.588Q23 5.175 23 6v8q0 .825-.587 1.412Q21.825 16 21 16Zm-4 4q-.825 0-1.412-.587Q1 18.825 1 18V8q0-.425.288-.713Q1.575 7 2 7t.713.287Q3 7.575 3 8v10h16q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 20 19 20ZM7 8q.825 0 1.412-.588Q9 6.825 9 6H7Zm14 0V6h-2q0 .825.587 1.412Q20.175 8 21 8ZM7 14h2q0-.825-.588-1.413Q7.825 12 7 12v2Zm12 0h2v-2q-.825 0-1.413.587Q19 13.175 19 14Z"/>
    </Icon>
  );
});

IconMaterialPaymentsFilled.displayName = 'AmauiIconMaterialPaymentsFilled';

export default IconMaterialPaymentsFilled;
