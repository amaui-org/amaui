import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolsPowerDrillFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsPowerDrillFilled'

      short_name='ToolsPowerDrill'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.75 10h4.5q.3 0 .525-.225Q12 9.55 12 9.25q0-.3-.225-.525-.225-.225-.525-.225h-4.5q-.3 0-.525.225Q6 8.95 6 9.25q0 .3.225.525.225.225.525.225Zm0-2.5h4.5q.3 0 .525-.225Q12 7.05 12 6.75q0-.3-.225-.525Q11.55 6 11.25 6h-4.5q-.3 0-.525.225Q6 6.45 6 6.75q0 .3.225.525.225.225.525.225ZM17 11V5h1q.825 0 1.413.588Q20 6.175 20 7h2q.425 0 .712.287Q23 7.575 23 8t-.288.712Q22.425 9 22 9h-2q0 .825-.587 1.412Q18.825 11 18 11Zm-5 4.5H6V13q-1.65 0-2.825-1.175Q2 10.65 2 9V7q0-1.65 1.175-2.825Q4.35 3 6 3h8q.825 0 1.413.587Q16 4.175 16 5v6q0 .825-.587 1.412Q14.825 13 14 13h-2ZM5.5 21q-.625 0-1.062-.438Q4 20.125 4 19.5V18q0-.625.438-1.062.437-.438 1.062-.438h7q.625 0 1.062.438Q14 17.375 14 18v1.5q0 .625-.438 1.062Q13.125 21 12.5 21Z"/>
    </Icon>
  );
});

IconMaterialToolsPowerDrillFilled.displayName = 'AmauiIconMaterialToolsPowerDrillFilled';

export default IconMaterialToolsPowerDrillFilled;
