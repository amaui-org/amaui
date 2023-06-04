import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial9mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='9mpW100Filled'

      short_name='9mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.15 11.1h3.7V5.9h-3.7v2.95h3v1.55h-3Zm.7-2.95V6.6h2.3v1.55ZM4.3 19.7V4.3h15.4v15.4Zm2.1-1.6h.7v-4.5h1.8v3h.7v-3h1.8v4.5h.7v-5.2H6.4Zm7.5 0h.7v-1.5h3v-3.7h-3.7Zm.7-4.5h2.3v2.3h-2.3Z"/>
    </Icon>
  );
});

IconMaterial9mpW100Filled.displayName = 'AmauiIconMaterial9mpW100Filled';

export default IconMaterial9mpW100Filled;
