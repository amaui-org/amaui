import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial5kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5kW100Filled'

      short_name='5k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.85 14.6h.7v-2.4L16 14.6h1.05l-2.75-2.65 2.75-2.55h-1l-2.5 2.35V9.4h-.7ZM7 14.6h3.7v-2.95h-3V10.1h3v-.7H7v2.95h3v1.55H7Zm-2.7 5.1V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterial5kW100Filled.displayName = 'AmauiIconMaterial5kW100Filled';

export default IconMaterial5kW100Filled;
