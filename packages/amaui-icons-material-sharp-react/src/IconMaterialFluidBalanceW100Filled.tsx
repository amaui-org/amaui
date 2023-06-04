import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFluidBalanceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidBalanceW100Filled'

      short_name='FluidBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v1.5h-9.9v2.85H6.65v.7h4.15v3.3H6.65v.7h4.15q0 1.175.275 2.3.275 1.125.975 2.05Zm13.35 2.4v-2.425q-1.425-.125-2.387-1.187Q13.3 16.425 13.3 15V9.3h7.4V15q0 1.425-.962 2.488-.963 1.062-2.388 1.187V20.4h3v.7Zm2.1-6.45H20V10h-6v2.65h.75q.675 0 1.263.3.587.3 1.012.85.3.425.763.638.462.212.962.212Z"/>
    </Icon>
  );
});

IconMaterialFluidBalanceW100Filled.displayName = 'AmauiIconMaterialFluidBalanceW100Filled';

export default IconMaterialFluidBalanceW100Filled;
