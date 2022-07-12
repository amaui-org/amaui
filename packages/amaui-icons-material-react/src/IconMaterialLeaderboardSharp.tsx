import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLeaderboardSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardSharp'
      short_name='Leaderboard'

      {...props}
    >
      <path d="M4 19H8V11H4ZM10 19H14V5H10ZM16 19H20V13H16ZM2 21V9H8V3H16V11H22V21Z"/>
    </Icon>
  )
});

export default IconMaterialLeaderboardSharp;
