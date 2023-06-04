import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatReclineNormalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatReclineNormalW100Filled'

      short_name='AirlineSeatReclineNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.975 18.7V7h.7v11h7v.7Zm3.55-12.05q-.675 0-1.137-.463-.463-.462-.463-1.137t.463-1.138q.462-.462 1.137-.462t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463Zm5.8 14.7V17h-7.65V9.8q0-.8.525-1.325.525-.525 1.325-.525.8 0 1.325.525.525.525.525 1.325v5.5h4.65v6.05Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatReclineNormalW100Filled.displayName = 'AmauiIconMaterialAirlineSeatReclineNormalW100Filled';

export default IconMaterialAirlineSeatReclineNormalW100Filled;
