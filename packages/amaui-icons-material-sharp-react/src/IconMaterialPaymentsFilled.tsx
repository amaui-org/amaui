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
      <path d="M14 13q1.25 0 2.125-.875T17 10q0-1.25-.875-2.125T14 7q-1.25 0-2.125.875T11 10q0 1.25.875 2.125T14 13Zm-9 3V4h18v12Zm-4 4V7h2v11h17v2ZM7 8q.825 0 1.412-.588Q9 6.825 9 6H7Zm14 0V6h-2q0 .825.587 1.412Q20.175 8 21 8Zm-2 6h2v-2q-.825 0-1.413.587Q19 13.175 19 14ZM7 14h2q0-.825-.588-1.413Q7.825 12 7 12Z"/>
    </Icon>
  );
});

IconMaterialPaymentsFilled.displayName = 'AmauiIconMaterialPaymentsFilled';

export default IconMaterialPaymentsFilled;
