import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFluidBalance = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidBalance'

      short_name='FluidBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v2H4v12h8v2Zm2-2V6v12Zm18 5h-5v-3.1q-1.725-.35-2.863-1.712Q13 16.825 13 15V8h10v7q0 1.825-1.137 3.188Q20.725 19.55 19 19.9V21h3Zm-2.25-9H21v-4h-6v2h.75q.825 0 1.562.375.738.375 1.238 1.025.2.3.525.45.325.15.675.15ZM18 18q.975 0 1.75-.562.775-.563 1.075-1.438H19.75q-.825 0-1.562-.363-.738-.362-1.238-1.037-.225-.275-.537-.438Q16.1 14 15.75 14H15v1q0 1.275.863 2.137Q16.725 18 18 18Zm-1.05-4.6ZM6 11h5V9H6Zm0 4h5v-2H6Z"/>
    </Icon>
  );
});

IconMaterialFluidBalance.displayName = 'AmauiIconMaterialFluidBalance';

export default IconMaterialFluidBalance;
