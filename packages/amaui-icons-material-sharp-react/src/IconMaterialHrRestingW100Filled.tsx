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
      <path d="M191 884v-28h576v28H191Zm63-317q-21.232-20.036-31.116-47.493T213 463.109Q213 403 253 361q40-42 99-42 27.529 0 52.765 11Q430 341 450 361l30 30 30-29q20-20 45.235-31.5Q580.471 319 608 319q59.062 0 99.531 42.69Q748 404.381 748 464q0 28.826-10.616 55.065Q726.768 545.304 707 566L480 785 254 567Z"/>
    </Icon>
  );
});

IconMaterialHrRestingW100Filled.displayName = 'AmauiIconMaterialHrRestingW100Filled';

export default IconMaterialHrRestingW100Filled;
