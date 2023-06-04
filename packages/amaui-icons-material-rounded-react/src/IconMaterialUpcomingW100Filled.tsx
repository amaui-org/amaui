import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpcomingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingW100Filled'

      short_name='Upcoming'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.1 10.4q-.125-.125-.125-.25t.125-.25l2.175-2.175q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-2.175 2.175q-.1.1-.225.1t-.25-.125ZM12 8.05q-.15 0-.25-.1t-.1-.25v-3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3q0 .15-.1.25t-.25.1ZM6.4 10.4 4.225 8.225q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l2.175 2.175q.1.1.1.225t-.125.25q-.125.125-.25.125T6.4 10.4Zm-1.6 9.3q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2v-3.4q0-.65.425-1.075Q4.15 13.3 4.8 13.3h2.35q.425 0 .662.175.238.175.438.625.425.95 1.463 1.575Q10.75 16.3 12 16.3t2.288-.637q1.037-.638 1.462-1.563.2-.45.438-.625.237-.175.662-.175h2.35q.65 0 1.075.425.425.425.425 1.075v3.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialUpcomingW100Filled.displayName = 'AmauiIconMaterialUpcomingW100Filled';

export default IconMaterialUpcomingW100Filled;
