import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterDramaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterDramaW100'

      short_name='FilterDrama'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 18.7q-1.75 0-2.975-1.225T2.3 14.5q0-1.575 1.125-2.875T6.35 10.3q.275-2.275 1.925-3.638Q9.925 5.3 12 5.3q2.375 0 4.038 1.65Q17.7 8.6 17.7 11v1.3h.8q1.325 0 2.263.925.937.925.937 2.25 0 1.35-.925 2.287-.925.938-2.275.938Zm0-.7h12q1.05 0 1.775-.725Q21 16.55 21 15.5q0-1.05-.725-1.775Q19.55 13 18.5 13H17v-2q0-2.075-1.462-3.538Q14.075 6 12 6q-1.8 0-3.237 1.2-1.438 1.2-1.713 3.125 1.45.225 2.55 1.337 1.1 1.113 1.1 2.838H10q0-1.45-1.025-2.475Q7.95 11 6.5 11q-1.45 0-2.475 1.025Q3 13.05 3 14.5q0 1.45 1.025 2.475Q5.05 18 6.5 18Z"/>
    </Icon>
  );
});

IconMaterialFilterDramaW100.displayName = 'AmauiIconMaterialFilterDramaW100';

export default IconMaterialFilterDramaW100;
