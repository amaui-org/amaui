import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBreakingNewsAlt1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreakingNewsAlt1Filled'

      short_name='BreakingNewsAlt1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17h5v-2H6Zm10 0h2v-2h-2ZM6 13h5v-2H6Zm10 0h2V7h-2ZM6 9h5V7H6ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v14q0 .825-.587 1.413Q20.825 21 20 21Zm0-2h16V5H4v14Zm16 0H4V5h16v14Z"/>
    </Icon>
  );
});

IconMaterialBreakingNewsAlt1Filled.displayName = 'AmauiIconMaterialBreakingNewsAlt1Filled';

export default IconMaterialBreakingNewsAlt1Filled;
