import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLeaderboardSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardSharpFilled'
      short_name='Leaderboard'

      {...props}
    >
      <path d="M2 21V9H7.5V21ZM9.25 21V3H14.75V21ZM16.5 21V11H22V21Z"/>
    </Icon>
  );
});

export default IconMaterialLeaderboardSharpFilled;
