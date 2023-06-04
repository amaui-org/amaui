import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindPowerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindPowerW100Filled'

      short_name='WindPower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.25 21.7q0-.35.363-.525Q11.975 21 12.65 21v-6.1q.1.025.175.025H13q.625 0 1.125-.363.5-.362.7-.937l3.525.875 2.75 5-1.2 1.2-6-6q-.125.075-.263.112-.137.038-.287.088V21q.675 0 1.037.175.363.175.363.525Zm-6.95-2V19H8v.7Zm6.925-5.95L8.25 15.6l-5.525-1.575V12.3H11.2q-.05.175-.087.337-.038.163-.038.363 0 .2.038.387.037.188.112.363Zm1.775.5q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363Zm1.025-2.875q-.225-.15-.487-.225-.263-.075-.538-.075h-.175q-.075 0-.175.025V7.3l4.225-3.925 1.45.9ZM2.3 9v-.7H6V9Zm3-4v-.7H10V5Z"/>
    </Icon>
  );
});

IconMaterialWindPowerW100Filled.displayName = 'AmauiIconMaterialWindPowerW100Filled';

export default IconMaterialWindPowerW100Filled;
