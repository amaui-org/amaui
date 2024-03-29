import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTotalDissolvedSolids = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TotalDissolvedSolids'

      short_name='TotalDissolvedSolids'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 11.8q.775-2.65 2.913-5.063Q9.35 4.325 11.35 2.575q.275-.25.65-.25t.65.25q2 1.75 4.138 4.162Q18.925 9.15 19.7 11.8h-2.1q-.575-1.55-1.975-3.337Q14.225 6.675 12 4.65 9.8 6.675 8.388 8.463 6.975 10.25 6.4 11.8Zm15.55 3.65q-.225 1.225-.788 2.313-.562 1.087-1.437 1.962t-1.962 1.425q-1.088.55-2.288.75Zm-4.075-1.65h2.85l-8.1 8.1q-.575-.125-1.112-.288-.538-.162-1.038-.437Zm-5.725 0h2.85l-6.225 6.225q-.375-.35-.712-.725-.338-.375-.613-.8Zm-6.075 0H7.15L4.4 16.55q-.2-.675-.3-1.362Q4 14.5 3.975 13.8Zm8.025-2Z"/>
    </Icon>
  );
});

IconMaterialTotalDissolvedSolids.displayName = 'AmauiIconMaterialTotalDissolvedSolids';

export default IconMaterialTotalDissolvedSolids;
