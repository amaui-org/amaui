import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricScooterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricScooterW100Filled'

      short_name='ElectricScooter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.15 17.35q-.975 0-1.663-.687Q2.8 15.975 2.8 15q0-.975.687-1.663.688-.687 1.663-.687.75 0 1.45.487.7.488.9 1.513h6.3q.15-1.8 1.425-3.125Q16.5 10.2 18.2 10.05l-1.675-7.7H12.8v-.7h4.3l1.95 9.05h-.2q-1.8 0-3.075 1.275Q14.5 13.25 14.5 15.05v.3h-7q-.2 1.025-.9 1.513-.7.487-1.45.487Zm13.7.05q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688Zm-5.9 5.15L8.1 20.1h3.2v-1.65l4.85 2.45h-3.2Z"/>
    </Icon>
  );
});

IconMaterialElectricScooterW100Filled.displayName = 'AmauiIconMaterialElectricScooterW100Filled';

export default IconMaterialElectricScooterW100Filled;
