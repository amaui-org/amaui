import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSolarPowerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SolarPowerW100Filled'

      short_name='SolarPower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.9 4v-.7h2.625V4Zm-.325 16.65h8.075v-3.3H4.225Zm2.4-11.45-.5-.475 1.85-1.85.5.475Zm-1.6 7.45h7.275v-3.375h-6.6ZM12 7.025q-1.575 0-2.662-1.088Q8.25 4.85 8.25 3.275h7.5q0 1.575-1.087 2.662Q13.575 7.025 12 7.025Zm-.35 4.225V8.625h.7v2.625Zm.7 9.4h8.05l-.65-3.3h-7.4Zm0-4h7.25l-.675-3.375H12.35Zm5.725-7.425L16.2 7.35l.475-.475 1.9 1.85ZM17.475 4v-.7H20.1V4Z"/>
    </Icon>
  );
});

IconMaterialSolarPowerW100Filled.displayName = 'AmauiIconMaterialSolarPowerW100Filled';

export default IconMaterialSolarPowerW100Filled;
