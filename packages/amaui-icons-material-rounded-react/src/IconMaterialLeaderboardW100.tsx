import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeaderboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardW100'

      short_name='Leaderboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.35 11.15v7.7q0 .35.225.575.225.225.575.225h4.5v-9.3h-4.5q-.35 0-.575.225-.225.225-.225.575Zm6-6v14.5h5.3V5.15q0-.35-.225-.575-.225-.225-.575-.225h-3.7q-.35 0-.575.225-.225.225-.225.575Zm6 7.2v7.3h4.5q.35 0 .575-.225.225-.225.225-.575v-5.7q0-.35-.225-.575-.225-.225-.575-.225h-4.5Zm4.5 8H4.15q-.625 0-1.062-.437-.438-.438-.438-1.063v-7.7q0-.625.438-1.063.437-.437 1.062-.437h4.5v-4.5q0-.625.438-1.063.437-.437 1.062-.437h3.7q.625 0 1.063.437.437.438.437 1.063v6.5h4.5q.625 0 1.063.437.437.438.437 1.063v5.7q0 .625-.437 1.063-.438.437-1.063.437Z"/>
    </Icon>
  );
});

IconMaterialLeaderboardW100.displayName = 'AmauiIconMaterialLeaderboardW100';

export default IconMaterialLeaderboardW100;
