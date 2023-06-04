import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsBaseballFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsBaseballFilled'

      short_name='SportsBaseball'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.175 18.225q-1.05-1.35-1.613-2.938Q2 13.7 2 12t.562-3.288q.563-1.587 1.613-2.937Q5.625 6.9 6.45 8.537q.825 1.638.825 3.463 0 1.825-.825 3.463-.825 1.637-2.275 2.762ZM12 22q-1.8 0-3.438-.6-1.637-.6-2.987-1.75 1.725-1.425 2.7-3.412Q9.25 14.25 9.25 12q0-2.25-.975-4.238-.975-1.987-2.7-3.412Q6.925 3.2 8.562 2.6 10.2 2 12 2q1.8 0 3.438.6 1.637.6 2.987 1.75-1.725 1.425-2.7 3.412Q14.75 9.75 14.75 12q0 2.25.975 4.238.975 1.987 2.7 3.412-1.35 1.15-2.987 1.75Q13.8 22 12 22Zm7.825-3.775q-1.45-1.125-2.275-2.762-.825-1.638-.825-3.463 0-1.825.825-3.463.825-1.637 2.275-2.762 1.05 1.35 1.613 2.937Q22 10.3 22 12q0 1.7-.562 3.287-.563 1.588-1.613 2.938Z"/>
    </Icon>
  );
});

IconMaterialSportsBaseballFilled.displayName = 'AmauiIconMaterialSportsBaseballFilled';

export default IconMaterialSportsBaseballFilled;
