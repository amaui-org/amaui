import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLeaderboardRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardRounded'
      short_name='Leaderboard'

      {...props}
    >
      <path d="M4 11V19Q4 19 4 19Q4 19 4 19H8Q8 19 8 19Q8 19 8 19V11Q8 11 8 11Q8 11 8 11H4Q4 11 4 11Q4 11 4 11ZM10 5V19Q10 19 10 19Q10 19 10 19H14Q14 19 14 19Q14 19 14 19V5Q14 5 14 5Q14 5 14 5H10Q10 5 10 5Q10 5 10 5ZM16 13V19Q16 19 16 19Q16 19 16 19H20Q20 19 20 19Q20 19 20 19V13Q20 13 20 13Q20 13 20 13H16Q16 13 16 13Q16 13 16 13ZM20 21H4Q3.175 21 2.588 20.413Q2 19.825 2 19V11Q2 10.175 2.588 9.587Q3.175 9 4 9H8V5Q8 4.175 8.588 3.587Q9.175 3 10 3H14Q14.825 3 15.413 3.587Q16 4.175 16 5V11H20Q20.825 11 21.413 11.587Q22 12.175 22 13V19Q22 19.825 21.413 20.413Q20.825 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialLeaderboardRounded.displayName = 'AmauiIconMaterialLeaderboardRounded';

export default IconMaterialLeaderboardRounded;
