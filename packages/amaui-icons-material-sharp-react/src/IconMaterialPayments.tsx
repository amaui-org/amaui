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
      <path d="M14 13q-1.25 0-2.125-.875T11 10q0-1.25.875-2.125T14 7q1.25 0 2.125.875T17 10q0 1.25-.875 2.125T14 13Zm-9 3V4h18v12Zm4-2h10q0-.825.587-1.413Q20.175 12 21 12V8q-.825 0-1.413-.588Q19 6.825 19 6H9q0 .825-.588 1.412Q7.825 8 7 8v4q.825 0 1.412.587Q9 13.175 9 14Zm-8 6V7h2v11h17v2Zm6-6V6Z"/>
    </Icon>
  );
});

IconMaterialPayments.displayName = 'AmauiIconMaterialPayments';

export default IconMaterialPayments;
