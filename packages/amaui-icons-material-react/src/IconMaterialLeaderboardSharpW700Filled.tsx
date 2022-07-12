import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLeaderboardSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardSharpW700Filled'
      short_name='Leaderboard'

      {...props}
    >
      <path d="M1.425 21.575V8.425H7.5V21.575ZM8.875 21.575V2.425H15.125V21.575ZM16.5 21.575V10.425H22.575V21.575Z"/>
    </Icon>
  )
});

export default IconMaterialLeaderboardSharpW700Filled;
