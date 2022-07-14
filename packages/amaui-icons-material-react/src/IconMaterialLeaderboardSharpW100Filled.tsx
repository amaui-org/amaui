import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLeaderboardSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardSharpW100Filled'
      short_name='Leaderboard'

      {...props}
    >
      <path d="M3.75 20.35V9.65H7.95V20.35ZM9.9 20.35V3.65H14.1V20.35ZM16 20.35V11.65H20.2V20.35Z"/>
    </Icon>
  );
});

export default IconMaterialLeaderboardSharpW100Filled;
