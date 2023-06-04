import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeaderboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardFilled'

      short_name='Leaderboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V9h5.5v12Zm7.25 0V3h5.5v18Zm7.25 0V11H22v10Z"/>
    </Icon>
  );
});

IconMaterialLeaderboardFilled.displayName = 'AmauiIconMaterialLeaderboardFilled';

export default IconMaterialLeaderboardFilled;
