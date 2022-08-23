import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLeaderboardRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardRoundedW100Filled'
      short_name='Leaderboard'

      {...props}
    >
      <path d="M4.5 20.35Q4.175 20.35 3.962 20.138Q3.75 19.925 3.75 19.6V10.4Q3.75 10.075 3.962 9.862Q4.175 9.65 4.5 9.65H7.2Q7.525 9.65 7.738 9.862Q7.95 10.075 7.95 10.4V19.6Q7.95 19.925 7.738 20.138Q7.525 20.35 7.2 20.35ZM10.65 20.35Q10.325 20.35 10.113 20.138Q9.9 19.925 9.9 19.6V4.4Q9.9 4.075 10.113 3.862Q10.325 3.65 10.65 3.65H13.35Q13.675 3.65 13.888 3.862Q14.1 4.075 14.1 4.4V19.6Q14.1 19.925 13.888 20.138Q13.675 20.35 13.35 20.35ZM16.75 20.35Q16.425 20.35 16.212 20.138Q16 19.925 16 19.6V12.4Q16 12.075 16.212 11.862Q16.425 11.65 16.75 11.65H19.45Q19.775 11.65 19.988 11.862Q20.2 12.075 20.2 12.4V19.6Q20.2 19.925 19.988 20.138Q19.775 20.35 19.45 20.35Z"/>
    </Icon>
  );
});

IconMaterialLeaderboardRoundedW100Filled.displayName = 'AmauiIconMaterialLeaderboardRoundedW100Filled';

export default IconMaterialLeaderboardRoundedW100Filled;
