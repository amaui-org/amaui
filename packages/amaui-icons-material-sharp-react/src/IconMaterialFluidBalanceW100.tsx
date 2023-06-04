import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFluidBalanceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidBalanceW100'

      short_name='FluidBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v1.5H20V6H4v12h8.3v.7ZM4 18V6v12Zm16.35 3.1h-3.7v-2.425q-1.425-.125-2.387-1.175-.963-1.05-.963-2.5V9.3h7.4V15q0 1.45-.962 2.5-.963 1.05-2.388 1.175V20.4h3Zm-1.6-6.45H20V10h-6v2.65h.75q.65 0 1.25.3t1.025.85q.3.425.763.638.462.212.962.212ZM17 18q1.15 0 2-.762.85-.763.975-1.888H18.75q-.675 0-1.275-.288-.6-.287-1.025-.837-.3-.425-.75-.65-.45-.225-.95-.225H14V15q0 1.275.863 2.137Q15.725 18 17 18Zm-.55-4.2Zm-9.8-3.45h4.15v-.7H6.65Zm0 4h4.15v-.7H6.65Z"/>
    </Icon>
  );
});

IconMaterialFluidBalanceW100.displayName = 'AmauiIconMaterialFluidBalanceW100';

export default IconMaterialFluidBalanceW100;
