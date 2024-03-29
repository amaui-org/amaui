import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4'

      short_name='Brightness4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 20H6q-.825 0-1.412-.587Q4 18.825 4 18v-2.65l-1.9-1.925Q1.5 12.85 1.5 12q0-.85.6-1.425L4 8.65V6q0-.825.588-1.412Q5.175 4 6 4h2.65l1.925-1.9q.575-.6 1.425-.6.85 0 1.425.6L15.35 4H18q.825 0 1.413.588Q20 5.175 20 6v2.65l1.9 1.925q.6.575.6 1.425 0 .85-.6 1.425L20 15.35V18q0 .825-.587 1.413Q18.825 20 18 20h-2.65l-1.925 1.9q-.575.6-1.412.588-.838-.013-1.438-.588ZM12 12Zm0 8.5 2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5 9.5 6H6v3.5L3.5 12 6 14.5V18h3.5Zm.225-3.5q2.125 0 3.6-1.463Q17.3 14.075 17.3 12t-1.475-3.525q-1.475-1.45-3.6-1.45-.325 0-.588.037-.262.038-.487.088-.15.05-.237.162-.088.113-.088.238 0 .05.225.4 1.025.675 1.55 1.762.525 1.088.525 2.288 0 1.275-.55 2.35-.55 1.075-1.55 1.725-.075.05-.225.375 0 .15.1.262.1.113.25.163.325.075.588.1.262.025.487.025Z"/>
    </Icon>
  );
});

IconMaterialBrightness4.displayName = 'AmauiIconMaterialBrightness4';

export default IconMaterialBrightness4;
