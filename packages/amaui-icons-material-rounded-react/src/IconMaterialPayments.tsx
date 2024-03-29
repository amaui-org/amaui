import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPayments = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Payments'

      short_name='Payments'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 13q-1.25 0-2.125-.875T11 10q0-1.25.875-2.125T14 7q1.25 0 2.125.875T17 10q0 1.25-.875 2.125T14 13Zm-7 3q-.825 0-1.412-.588Q5 14.825 5 14V6q0-.825.588-1.412Q6.175 4 7 4h14q.825 0 1.413.588Q23 5.175 23 6v8q0 .825-.587 1.412Q21.825 16 21 16Zm2-2h10q0-.825.587-1.413Q20.175 12 21 12V8q-.825 0-1.413-.588Q19 6.825 19 6H9q0 .825-.588 1.412Q7.825 8 7 8v4q.825 0 1.412.587Q9 13.175 9 14Zm-6 6q-.825 0-1.412-.587Q1 18.825 1 18V8q0-.425.288-.713Q1.575 7 2 7t.713.287Q3 7.575 3 8v10h16q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 20 19 20Zm4-6V6v8Z"/>
    </Icon>
  );
});

IconMaterialPayments.displayName = 'AmauiIconMaterialPayments';

export default IconMaterialPayments;
