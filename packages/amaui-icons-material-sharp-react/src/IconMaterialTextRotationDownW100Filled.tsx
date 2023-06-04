import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationDownW100Filled'

      short_name='TextRotationDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.75 20.05 3.2 17.5l.5-.5 1.7 1.7V4.6h.7v14.1L7.8 17l.5.5Zm4.45-3.95v-.75l2.85-1.05V9.6L10.2 8.55V7.8l10.1 3.85v.7Zm3.5-2.05 5.5-2v-.1l-5.5-2.1Z"/>
    </Icon>
  );
});

IconMaterialTextRotationDownW100Filled.displayName = 'AmauiIconMaterialTextRotationDownW100Filled';

export default IconMaterialTextRotationDownW100Filled;
