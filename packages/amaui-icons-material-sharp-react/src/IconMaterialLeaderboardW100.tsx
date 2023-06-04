import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeaderboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardW100'

      short_name='Leaderboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.35 19.65h5.3v-9.3h-5.3Zm6 0h5.3V4.35h-5.3Zm6 0h5.3v-7.3h-5.3Zm-12.7.7V9.65h6v-6h6.7v8h6v8.7Z"/>
    </Icon>
  );
});

IconMaterialLeaderboardW100.displayName = 'AmauiIconMaterialLeaderboardW100';

export default IconMaterialLeaderboardW100;
