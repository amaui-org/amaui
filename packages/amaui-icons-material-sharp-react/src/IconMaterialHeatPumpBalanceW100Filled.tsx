import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeatPumpBalanceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpBalanceW100Filled'

      short_name='HeatPumpBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 17.2h4.7V8.8h3.3v8.4h4.7V8.8h4.425l-1.85 1.8.475.5 2.675-2.65L20.4 5.775l-.475.5L21.75 8.1h-5.1v8.4h-3.3V8.1h-4.7v8.4h-3.3V8.1h-.7ZM2.3 20.3v-8h19.4v8Z"/>
    </Icon>
  );
});

IconMaterialHeatPumpBalanceW100Filled.displayName = 'AmauiIconMaterialHeatPumpBalanceW100Filled';

export default IconMaterialHeatPumpBalanceW100Filled;
