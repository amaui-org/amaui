import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindPowerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindPowerW100'

      short_name='WindPower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.25 21.7q0-.35.363-.525Q11.975 21 12.65 21v-6.1q-.5-.1-.862-.4-.363-.3-.563-.75L8.25 15.6l-5.525-1.575V12.3H11.2q.2-.45.575-.775.375-.325.875-.425V7.3l4.225-3.925 1.45.9-4.3 7.1q.525.275.775.962.25.688.025 1.288l3.5.875 2.75 5-1.2 1.2-6-6q-.125.075-.25.125t-.275.075V21q.675 0 1.037.175.363.175.363.525ZM5.3 5v-.7H10V5Zm8.05 2.6v3.5l4-6.6-.4-.25ZM2.3 9v-.7H6V9ZM13 14.25q.525 0 .887-.363.363-.362.363-.887t-.363-.887q-.362-.363-.887-.363t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363Zm-4.9.6L11.075 13h-7.65v.5Zm9.75.25-3.4-.85 5.375 5.425.35-.35ZM4.3 19.7V19H8v.7ZM13 13Zm.35-1.9ZM11.075 13Zm3.375 1.25Z"/>
    </Icon>
  );
});

IconMaterialWindPowerW100.displayName = 'AmauiIconMaterialWindPowerW100';

export default IconMaterialWindPowerW100;
