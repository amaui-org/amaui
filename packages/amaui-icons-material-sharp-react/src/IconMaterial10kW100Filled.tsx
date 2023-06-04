import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial10kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='10kW100Filled'

      short_name='10k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.6 14.6h.7v-2.4l2.45 2.4h1.05l-2.75-2.65L18.8 9.4h-1l-2.5 2.35V9.4h-.7Zm-7.6 0h.7V9.4H5.5v.7H7Zm2.3 0H13V9.4H9.3Zm.7-.7v-3.8h2.3v3.8Zm-5.7 5.8V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterial10kW100Filled.displayName = 'AmauiIconMaterial10kW100Filled';

export default IconMaterial10kW100Filled;
