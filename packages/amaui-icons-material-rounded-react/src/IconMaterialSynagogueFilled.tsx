import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSynagogueFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SynagogueFilled'

      short_name='Synagogue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 8V7q0-.825.587-1.412Q20.175 5 21 5q.825 0 1.413.588Q23 6.175 23 7v1ZM1 8V7q0-.825.588-1.412Q2.175 5 3 5t1.412.588Q5 6.175 5 7v1Zm2 13q-.825 0-1.412-.587Q1 19.825 1 19V9h4v12Zm3 0V8.925q0-.45.188-.85.187-.4.537-.675l4-3.325q.275-.225.6-.35Q11.65 3.6 12 3.6q.35 0 .675.125.325.125.6.35l4 3.325q.35.275.537.675.188.4.188.85V21h-4v-5q0-.825-.587-1.413Q12.825 14 12 14q-.825 0-1.412.587Q10 15.175 10 16v5Zm13 0V9h4v10q0 .825-.587 1.413Q21.825 21 21 21Zm-7-9.5q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 8.5 12 8.5t-1.062.438Q10.5 9.375 10.5 10t.438 1.062q.437.438 1.062.438Z"/>
    </Icon>
  );
});

IconMaterialSynagogueFilled.displayName = 'AmauiIconMaterialSynagogueFilled';

export default IconMaterialSynagogueFilled;
