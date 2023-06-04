import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeaderboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Leaderboard'

      short_name='Leaderboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19h4v-8H4Zm6 0h4V5h-4Zm6 0h4v-6h-4ZM2 21V9h6V3h8v8h6v10Z"/>
    </Icon>
  );
});

IconMaterialLeaderboard.displayName = 'AmauiIconMaterialLeaderboard';

export default IconMaterialLeaderboard;
