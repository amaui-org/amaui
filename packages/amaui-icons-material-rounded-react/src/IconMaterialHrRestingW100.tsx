import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHrRestingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HrRestingW100'

      short_name='HrResting'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M205 884q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h548q5.95 0 9.975 4.035 4.025 4.035 4.025 10T762.975 880q-4.025 4-9.975 4H205Zm49-317q-21.232-20.036-31.116-47.493T213 463.109Q213 403 253 361q40-42 99-42 27.529 0 52.765 11Q430 341 450 361l30 30 30-29q20-20 45.235-31.5Q580.471 319 608 319q59.062 0 99.531 42.69Q748 404.381 748 464q0 28.826-10.616 55.065Q726.768 545.304 707 566L499 767q-3.949 4-8.974 6Q485 775 480 775t-10.026-2q-5.025-2-8.974-6L254 567Zm19-20 207 200 208-201q17-16 25-37.5t8-44.5q0-48-32-82t-79.681-34Q587 348 567 356.5q-20 8.5-36 24.5l-31 31q-4.138 4-9.31 6-5.173 2-10.69 2-6.182 0-11.591-3Q463 414 458 409l-28-28q-16-16-35.5-25t-42.5-9q-48 0-80 34t-32 82q0 23 8 45t25 39Zm208 0Z"/>
    </Icon>
  );
});

IconMaterialHrRestingW100.displayName = 'AmauiIconMaterialHrRestingW100';

export default IconMaterialHrRestingW100;
