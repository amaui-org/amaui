import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeaderboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardW100Filled'

      short_name='Leaderboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.5 20.35q-.325 0-.538-.212-.212-.213-.212-.538v-9.2q0-.325.212-.538.213-.212.538-.212h2.7q.325 0 .538.212.212.213.212.538v9.2q0 .325-.212.538-.213.212-.538.212Zm6.15 0q-.325 0-.537-.212-.213-.213-.213-.538V4.4q0-.325.213-.538.212-.212.537-.212h2.7q.325 0 .538.212.212.213.212.538v15.2q0 .325-.212.538-.213.212-.538.212Zm6.1 0q-.325 0-.538-.212Q16 19.925 16 19.6v-7.2q0-.325.212-.538.213-.212.538-.212h2.7q.325 0 .538.212.212.213.212.538v7.2q0 .325-.212.538-.213.212-.538.212Z"/>
    </Icon>
  );
});

IconMaterialLeaderboardW100Filled.displayName = 'AmauiIconMaterialLeaderboardW100Filled';

export default IconMaterialLeaderboardW100Filled;
