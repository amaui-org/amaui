import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLeaderboardRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardRoundedFilled'
      short_name='Leaderboard'

      {...props}
    >
      <path d="M3 21Q2.575 21 2.288 20.712Q2 20.425 2 20V10Q2 9.575 2.288 9.287Q2.575 9 3 9H6.5Q6.925 9 7.213 9.287Q7.5 9.575 7.5 10V20Q7.5 20.425 7.213 20.712Q6.925 21 6.5 21ZM10.25 21Q9.825 21 9.538 20.712Q9.25 20.425 9.25 20V4Q9.25 3.575 9.538 3.287Q9.825 3 10.25 3H13.75Q14.175 3 14.463 3.287Q14.75 3.575 14.75 4V20Q14.75 20.425 14.463 20.712Q14.175 21 13.75 21ZM17.5 21Q17.075 21 16.788 20.712Q16.5 20.425 16.5 20V12Q16.5 11.575 16.788 11.287Q17.075 11 17.5 11H21Q21.425 11 21.712 11.287Q22 11.575 22 12V20Q22 20.425 21.712 20.712Q21.425 21 21 21Z"/>
    </Icon>
  );
});

IconMaterialLeaderboardRoundedFilled.displayName = 'AmauiIconMaterialLeaderboardRoundedFilled';

export default IconMaterialLeaderboardRoundedFilled;
