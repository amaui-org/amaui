import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kW100Filled'

      short_name='4k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.85 14.6h.7v-2.4L16 14.6h1.05l-2.75-2.65 2.75-2.55h-1l-2.5 2.35V9.4h-.7ZM7 13.1h2.7v1.5h.7v-1.5h1.3v-.7h-1.3v-3h-.7v3h-2v-3H7Zm-2.7 6.6V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterial4kW100Filled.displayName = 'AmauiIconMaterial4kW100Filled';

export default IconMaterial4kW100Filled;
