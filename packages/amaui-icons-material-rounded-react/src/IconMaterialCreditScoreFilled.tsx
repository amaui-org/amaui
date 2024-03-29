import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditScoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreFilled'

      short_name='CreditScore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.25 21.3-2.875-2.875q-.275-.275-.275-.675t.3-.7q.275-.275.7-.288.425-.012.7.288l2.15 2.1 4.95-4.95q.275-.275.687-.275.413 0 .713.3t.288.725q-.013.425-.313.725L15.65 21.3q-.275.275-.7.275-.425 0-.7-.275ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v6h-2.725l-4.325 4.325-.7-.7q-.875-.875-2.125-.875T10 15.625q-.875.875-.887 2.113-.013 1.237.862 2.112l.15.15Zm0-8h16V8H4Z"/>
    </Icon>
  );
});

IconMaterialCreditScoreFilled.displayName = 'AmauiIconMaterialCreditScoreFilled';

export default IconMaterialCreditScoreFilled;
