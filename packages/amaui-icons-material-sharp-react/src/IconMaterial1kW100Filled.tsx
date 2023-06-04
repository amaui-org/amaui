import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kW100Filled'

      short_name='1k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.7 14.6h.7v-2.4l2.45 2.4h1.05l-2.75-2.65L16.9 9.4h-1l-2.5 2.35V9.4h-.7Zm-3.8 0h.7V9.4H7.4v.7h1.5Zm-4.6 5.1V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterial1kW100Filled.displayName = 'AmauiIconMaterial1kW100Filled';

export default IconMaterial1kW100Filled;
