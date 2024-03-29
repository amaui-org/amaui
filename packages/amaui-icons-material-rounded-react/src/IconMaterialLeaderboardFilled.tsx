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
      <path d="M3 21q-.425 0-.712-.288Q2 20.425 2 20V10q0-.425.288-.713Q2.575 9 3 9h3.5q.425 0 .713.287.287.288.287.713v10q0 .425-.287.712Q6.925 21 6.5 21Zm7.25 0q-.425 0-.712-.288-.288-.287-.288-.712V4q0-.425.288-.713Q9.825 3 10.25 3h3.5q.425 0 .713.287.287.288.287.713v16q0 .425-.287.712-.288.288-.713.288Zm7.25 0q-.425 0-.712-.288-.288-.287-.288-.712v-8q0-.425.288-.713.287-.287.712-.287H21q.425 0 .712.287.288.288.288.713v8q0 .425-.288.712Q21.425 21 21 21Z"/>
    </Icon>
  );
});

IconMaterialLeaderboardFilled.displayName = 'AmauiIconMaterialLeaderboardFilled';

export default IconMaterialLeaderboardFilled;
