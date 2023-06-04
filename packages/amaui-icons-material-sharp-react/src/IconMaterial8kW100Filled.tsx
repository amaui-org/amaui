import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial8kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='8kW100Filled'

      short_name='8k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.85 14.6h.7v-2.4L16 14.6h1.05l-2.75-2.65 2.75-2.55h-1l-2.5 2.35V9.4h-.7ZM7 14.6h3.7V9.4H7Zm.7-2.95V10.1H10v1.55Zm0 2.25v-1.55H10v1.55Zm-3.4 5.8V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterial8kW100Filled.displayName = 'AmauiIconMaterial8kW100Filled';

export default IconMaterial8kW100Filled;
