import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeaderboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardW100Filled'

      short_name='Leaderboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.75 20.35V9.65h4.2v10.7Zm6.15 0V3.65h4.2v16.7Zm6.1 0v-8.7h4.2v8.7Z"/>
    </Icon>
  );
});

IconMaterialLeaderboardW100Filled.displayName = 'AmauiIconMaterialLeaderboardW100Filled';

export default IconMaterialLeaderboardW100Filled;
