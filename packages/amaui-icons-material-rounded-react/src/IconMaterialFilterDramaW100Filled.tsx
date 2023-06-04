import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterDramaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterDramaW100Filled'

      short_name='FilterDrama'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 18.7q-1.75 0-2.975-1.225T2.3 14.5q0-1.725 1.225-2.963Q4.75 10.3 6.5 10.3q1.65 0 2.85 1.112 1.2 1.113 1.325 2.738.025.15.137.25.113.1.238.1.15 0 .25-.113.1-.112.1-.237-.125-1.95-1.462-3.225Q8.6 9.65 6.5 9.6q.425-1.925 1.988-3.112Q10.05 5.3 12 5.3q2.375 0 4.038 1.663Q17.7 8.625 17.7 11v1.3h.8q1.35 0 2.275.925.925.925.925 2.275 0 1.325-.937 2.262-.938.938-2.263.938Z"/>
    </Icon>
  );
});

IconMaterialFilterDramaW100Filled.displayName = 'AmauiIconMaterialFilterDramaW100Filled';

export default IconMaterialFilterDramaW100Filled;
