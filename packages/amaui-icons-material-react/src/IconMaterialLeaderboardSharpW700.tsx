import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLeaderboardSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardSharpW700'
      short_name='Leaderboard'

      {...props}
    >
      <path d="M4.575 18.425H7.425V11.575H4.575ZM10.575 18.425H13.425V5.575H10.575ZM16.575 18.425H19.425V13.575H16.575ZM1.425 21.575V8.425H7.425V2.425H16.575V10.425H22.575V21.575Z"/>
    </Icon>
  )
});

export default IconMaterialLeaderboardSharpW700;
