import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial7mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='7mpW100Filled'

      short_name='7mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.55 11.1h.75l1.625-5.2H10v.7h2.975ZM4.3 19.7V4.3h15.4v15.4Zm2.1-1.6h.7v-4.5h1.8v3h.7v-3h1.8v4.5h.7v-5.2H6.4Zm7.5 0h.7v-1.5h3v-3.7h-3.7Zm.7-4.5h2.3v2.3h-2.3Z"/>
    </Icon>
  );
});

IconMaterial7mpW100Filled.displayName = 'AmauiIconMaterial7mpW100Filled';

export default IconMaterial7mpW100Filled;
