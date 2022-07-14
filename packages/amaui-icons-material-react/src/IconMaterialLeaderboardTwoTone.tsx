import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLeaderboardTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardTwoTone'
      short_name='Leaderboard'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><g opacity=".3"><path d="M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"/></g><g><path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"/></g>
    </Icon>
  );
});

export default IconMaterialLeaderboardTwoTone;
