import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MopFilled'

      short_name='Mop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.55 21H6v-2q0-.425.287-.712Q6.575 18 7 18t.713.288Q8 18.575 8 19v2h3v-2q0-.425.288-.712Q11.575 18 12 18t.713.288Q13 18.575 13 19v2h3v-2q0-.425.288-.712Q16.575 18 17 18t.712.288Q18 18.575 18 19v2h2.45l-1-4H4.55l-1 4Zm16.9 2H3.55q-.975 0-1.575-.775t-.35-1.725L3 15v-2q0-.825.587-1.413Q4.175 11 5 11h4V4q0-1.25.875-2.125T12 1q1.25 0 2.125.875T15 4v7h4q.825 0 1.413.587Q21 12.175 21 13v2l1.375 5.5q.325.95-.287 1.725-.613.775-1.638.775Z"/>
    </Icon>
  );
});

IconMaterialMopFilled.displayName = 'AmauiIconMaterialMopFilled';

export default IconMaterialMopFilled;
