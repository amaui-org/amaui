import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSolarPowerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SolarPowerW100'

      short_name='SolarPower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.575 20.65 1.475-7.375h13.875L20.4 20.65ZM3.9 4v-.7h2.625V4Zm.55 15.95h7.2v-2.6H4.975ZM5.975 9.2l-.5-.475 1.85-1.85.5.475Zm-.85 7.45h6.525v-2.675h-6ZM12 7.025q-1.575 0-2.662-1.088Q8.25 4.85 8.25 3.275h.7q0 1.275.888 2.162.887.888 2.162.888t2.163-.888q.887-.887.887-2.162h.7q0 1.575-1.087 2.662Q13.575 7.025 12 7.025Zm0-3.75Zm-.35 7.975V8.625h.7v2.625Zm.7 8.7h7.175L19 17.35h-6.65Zm0-3.3h6.5l-.525-2.675H12.35Zm5.725-7.425L16.2 7.35l.475-.475 1.9 1.85ZM17.475 4v-.7H20.1V4Z"/>
    </Icon>
  );
});

IconMaterialSolarPowerW100.displayName = 'AmauiIconMaterialSolarPowerW100';

export default IconMaterialSolarPowerW100;
