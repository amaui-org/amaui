import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAvgTimeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvgTimeFilled'

      short_name='AvgTime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 3q-.425 0-.712-.288Q9 2.425 9 2t.288-.713Q9.575 1 10 1h4q.425 0 .713.287Q15 1.575 15 2t-.287.712Q14.425 3 14 3Zm0 11.75-1.1-2.2q-.125-.275-.375-.413Q8.275 12 8 12H3.05q.375-3.375 2.925-5.688Q8.525 4 12 4q1.55 0 2.975.5t2.675 1.45l.7-.7q.275-.275.7-.288.425-.012.7.288.275.275.275.7 0 .425-.275.7l-.7.7q.8 1.05 1.275 2.212.475 1.163.625 2.438h-4.325L14.9 8.55q-.275-.575-.9-.575t-.9.575ZM12 22q-3.475 0-6.025-2.312Q3.425 17.375 3.05 14h4.325L9.1 17.45q.275.575.9.575t.9-.575l3.1-6.2 1.1 2.2q.125.275.375.413.25.137.525.137h4.95q-.375 3.375-2.912 5.688Q15.5 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialAvgTimeFilled.displayName = 'AmauiIconMaterialAvgTimeFilled';

export default IconMaterialAvgTimeFilled;
