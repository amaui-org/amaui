import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimeline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timeline'

      short_name='Timeline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 18q-.825 0-1.412-.587Q1 16.825 1 16q0-.825.588-1.413Q2.175 14 3 14h.263q.112 0 .237.05L8.05 9.5Q8 9.375 8 9.262V9q0-.825.588-1.413Q9.175 7 10 7t1.413.587Q12 8.175 12 9q0 .05-.05.5l2.55 2.55q.125-.05.238-.05h.524q.113 0 .238.05l3.55-3.55Q19 8.375 19 8.262V8q0-.825.587-1.412Q20.175 6 21 6q.825 0 1.413.588Q23 7.175 23 8t-.587 1.412Q21.825 10 21 10h-.262q-.113 0-.238-.05l-3.55 3.55q.05.125.05.238V14q0 .825-.587 1.412Q15.825 16 15 16q-.825 0-1.412-.588Q13 14.825 13 14v-.262q0-.113.05-.238l-2.55-2.55q-.125.05-.238.05H10q-.05 0-.5-.05L4.95 15.5q.05.125.05.238V16q0 .825-.588 1.413Q3.825 18 3 18Z"/>
    </Icon>
  );
});

IconMaterialTimeline.displayName = 'AmauiIconMaterialTimeline';

export default IconMaterialTimeline;
