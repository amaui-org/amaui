import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsFootballW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsFootballW100Filled'

      short_name='SportsFootball'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 19.575q-1.075.15-2.787.113-1.713-.038-2.588-.413-.275-.825-.325-2.5-.05-1.675.15-2.75Zm.85-.15-6.25-6.25q.425-1.75 1.15-3.3.725-1.55 1.65-2.475.95-.95 2.6-1.738 1.65-.787 3.175-1.037L19.4 10.9q-.275 1.675-1.025 3.225-.75 1.55-1.725 2.525-1.025 1.025-2.588 1.775-1.562.75-3.212 1Zm-1.375-4.9q.125.125.25.125t.225-.1l4.575-4.575q.125-.125.125-.25t-.125-.25q-.125-.125-.25-.125t-.225.1l-4.575 4.575q-.125.125-.125.25t.125.25ZM19.55 10.05l-5.5-5.6q1-.2 2.688-.138 1.687.063 2.512.363.4.975.45 2.575.05 1.6-.15 2.8Z"/>
    </Icon>
  );
});

IconMaterialSportsFootballW100Filled.displayName = 'AmauiIconMaterialSportsFootballW100Filled';

export default IconMaterialSportsFootballW100Filled;
