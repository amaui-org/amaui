import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHrRestingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HrRestingW100Filled'

      short_name='HrResting'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M205 884q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h548q5.95 0 9.975 4.035 4.025 4.035 4.025 10T762.975 880q-4.025 4-9.975 4H205Zm49-317q-21.232-20.036-31.116-47.493T213 463.109Q213 403 253 361q40-42 99-42 27.529 0 52.765 11Q430 341 450 361l30 30 30-29q20-20 45.235-31.5Q580.471 319 608 319q59.062 0 99.531 42.69Q748 404.381 748 464q0 28.826-10.616 55.065Q726.768 545.304 707 566L499 767q-3.949 4-8.974 6Q485 775 480 775t-10.026-2q-5.025-2-8.974-6L254 567Z"/>
    </Icon>
  );
});

IconMaterialHrRestingW100Filled.displayName = 'AmauiIconMaterialHrRestingW100Filled';

export default IconMaterialHrRestingW100Filled;
