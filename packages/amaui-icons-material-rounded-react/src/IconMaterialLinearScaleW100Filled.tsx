import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLinearScaleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinearScaleW100Filled'

      short_name='LinearScale'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.2 16.1q-1.625 0-2.75-1.025T13.1 12.35H6.65q-.125.675-.637 1.162Q5.5 14 4.7 14q-.825 0-1.412-.588Q2.7 12.825 2.7 12t.588-1.413Q3.875 10 4.7 10q.8 0 1.313.488.512.487.637 1.162h6.45q.225-1.7 1.35-2.725Q15.575 7.9 17.2 7.9q1.7 0 2.9 1.225t1.2 2.925q0 1.65-1.2 2.85-1.2 1.2-2.9 1.2Zm0-.7q1.4 0 2.4-1t1-2.4q0-1.4-1-2.4t-2.4-1q-1.4 0-2.4 1t-1 2.4q0 1.4 1 2.4t2.4 1Z"/>
    </Icon>
  );
});

IconMaterialLinearScaleW100Filled.displayName = 'AmauiIconMaterialLinearScaleW100Filled';

export default IconMaterialLinearScaleW100Filled;
