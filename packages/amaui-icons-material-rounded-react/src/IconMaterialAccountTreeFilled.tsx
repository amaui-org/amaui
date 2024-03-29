import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountTreeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountTreeFilled'

      short_name='AccountTree'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 21q-.825 0-1.412-.587Q15 19.825 15 19v-1h-2q-.825 0-1.412-.587Q11 16.825 11 16V8H9v1q0 .825-.588 1.412Q7.825 11 7 11H4q-.825 0-1.412-.588Q2 9.825 2 9V5q0-.825.588-1.413Q3.175 3 4 3h3q.825 0 1.412.587Q9 4.175 9 5v1h6V5q0-.825.588-1.413Q16.175 3 17 3h3q.825 0 1.413.587Q22 4.175 22 5v4q0 .825-.587 1.412Q20.825 11 20 11h-3q-.825 0-1.412-.588Q15 9.825 15 9V8h-2v8h2v-1q0-.825.588-1.413Q16.175 13 17 13h3q.825 0 1.413.587Q22 14.175 22 15v4q0 .825-.587 1.413Q20.825 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialAccountTreeFilled.displayName = 'AmauiIconMaterialAccountTreeFilled';

export default IconMaterialAccountTreeFilled;
