import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeatPumpBalanceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpBalanceW100'

      short_name='HeatPumpBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.35 17.2h-4.7V8.1h.7v8.4h3.3V8.1h4.7v8.4h3.3V8.1h5.1l-1.825-1.825.475-.5 2.675 2.675L20.4 11.1l-.475-.5 1.85-1.8H17.35v8.4h-4.7V8.8h-3.3ZM2.3 20.3v-8h19.4v8Zm.7-.7h18V13H3ZM21 13H3Z"/>
    </Icon>
  );
});

IconMaterialHeatPumpBalanceW100.displayName = 'AmauiIconMaterialHeatPumpBalanceW100';

export default IconMaterialHeatPumpBalanceW100;
