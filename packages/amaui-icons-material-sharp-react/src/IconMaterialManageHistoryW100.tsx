import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialManageHistoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageHistoryW100'

      short_name='ManageHistory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.95 4.3q3.2 0 5.45 2.25T19.65 12v.35h-.7V12q0-2.925-2.037-4.963Q14.875 5 11.95 5q-1.5 0-2.825.612Q7.8 6.225 6.75 7.3h2.4V8h-3.6V4.4h.7v2.4q1.125-1.175 2.6-1.838 1.475-.662 3.1-.662ZM11.675 7h.7v4.85l2.1 2.1-.375.625-2.425-2.425Zm-7.35 6h.7q.375 2.375 2.063 4.025 1.687 1.65 4.037 1.925l.45.75q-2.8-.125-4.85-2.012Q4.675 15.8 4.325 13Zm14.9 10.35-.15-1.125q-.525-.075-1-.338-.475-.262-.825-.687l-1.075.35-.25-.4.875-.675q-.225-.525-.225-1.1 0-.575.225-1.15l-.925-.725.3-.45 1.1.425q.35-.4.8-.65.45-.25 1-.35l.15-1.125h.5l.15 1.125q.575.1 1.05.375.475.275.8.7l1.15-.45.25.5-.95.725q.2.575.2 1.1 0 .525-.2.975l1 .75-.25.4-1.2-.4q-.325.425-.8.712-.475.288-1.05.363l-.15 1.125Zm.25-1.8q.9 0 1.55-.65t.65-1.55q0-.9-.65-1.55t-1.55-.65q-.9 0-1.55.65t-.65 1.55q0 .9.65 1.55t1.55.65Z"/>
    </Icon>
  );
});

IconMaterialManageHistoryW100.displayName = 'AmauiIconMaterialManageHistoryW100';

export default IconMaterialManageHistoryW100;
