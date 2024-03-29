import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFluidBalanceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidBalanceFilled'

      short_name='FluidBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v2H11v3H6v2h5v2H6v2h5q0 1.425.562 2.725.563 1.3 1.588 2.275Zm15 3v-3.1q-1.75-.35-2.875-1.725T13 15V8h10v7q0 1.8-1.125 3.175Q20.75 19.55 19 19.9V21h3v2Zm2.75-9H21v-4h-6v2h.75q.825 0 1.562.375.738.375 1.238 1.025.2.3.525.45.325.15.675.15Z"/>
    </Icon>
  );
});

IconMaterialFluidBalanceFilled.displayName = 'AmauiIconMaterialFluidBalanceFilled';

export default IconMaterialFluidBalanceFilled;
