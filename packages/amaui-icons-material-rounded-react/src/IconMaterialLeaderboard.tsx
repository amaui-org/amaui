import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeaderboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Leaderboard'

      short_name='Leaderboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 11v8h4v-8H4Zm6-6v14h4V5h-4Zm6 8v6h4v-6h-4Zm4 8H4q-.825 0-1.412-.587Q2 19.825 2 19v-8q0-.825.588-1.413Q3.175 9 4 9h4V5q0-.825.588-1.413Q9.175 3 10 3h4q.825 0 1.413.587Q16 4.175 16 5v6h4q.825 0 1.413.587Q22 12.175 22 13v6q0 .825-.587 1.413Q20.825 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialLeaderboard.displayName = 'AmauiIconMaterialLeaderboard';

export default IconMaterialLeaderboard;
