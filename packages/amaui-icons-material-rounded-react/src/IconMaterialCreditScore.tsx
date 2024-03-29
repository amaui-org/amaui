import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditScore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScore'

      short_name='CreditScore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 8h16V6H4ZM2 6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v6H4v6h2.15q.425 0 .7.288.275.287.275.712t-.3.712Q6.525 20 6.1 20H4q-.825 0-1.412-.587Q2 18.825 2 18Zm12.95 13.15 4.95-4.95q.275-.275.687-.275.413 0 .713.3t.288.725q-.013.425-.313.725L15.65 21.3q-.3.3-.7.3-.4 0-.7-.3l-2.875-2.875q-.275-.275-.275-.675t.3-.7q.275-.275.688-.275.412 0 .712.275ZM4 6v12-3.25 1.575V6Z"/>
    </Icon>
  );
});

IconMaterialCreditScore.displayName = 'AmauiIconMaterialCreditScore';

export default IconMaterialCreditScore;
