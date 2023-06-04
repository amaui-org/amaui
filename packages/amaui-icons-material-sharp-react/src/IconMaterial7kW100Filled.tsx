import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial7kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='7kW100Filled'

      short_name='7k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.85 14.6h.7v-2.4L16 14.6h1.05l-2.75-2.65 2.75-2.55h-1l-2.5 2.35V9.4h-.7Zm-4.475 0h.75l1.8-5.2H7v.7h2.95ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterial7kW100Filled.displayName = 'AmauiIconMaterial7kW100Filled';

export default IconMaterial7kW100Filled;
