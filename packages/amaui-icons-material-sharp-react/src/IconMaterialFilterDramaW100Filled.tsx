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
      <path d="M6.5 18.7q-1.75 0-2.975-1.225T2.3 14.5q0-1.725 1.225-2.963Q4.75 10.3 6.5 10.3q1.725 0 2.963 1.237Q10.7 12.775 10.7 14.5h.7q0-2.075-1.362-3.463Q8.675 9.65 6.5 9.6q.425-1.925 1.988-3.112Q10.05 5.3 12 5.3q2.375 0 4.038 1.663Q17.7 8.625 17.7 11v1.3h.8q1.35 0 2.275.925.925.925.925 2.275 0 1.325-.937 2.262-.938.938-2.263.938Z"/>
    </Icon>
  );
});

IconMaterialFilterDramaW100Filled.displayName = 'AmauiIconMaterialFilterDramaW100Filled';

export default IconMaterialFilterDramaW100Filled;
