import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial14mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='14mpW100Filled'

      short_name='14mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.9 11.1h.7V5.9H7.4v.7h1.5Zm5.8 0h.7V9.6h1.3v-.7h-1.3v-3h-.7v3h-2v-3H12v3.7h2.7ZM4.3 19.7V4.3h15.4v15.4Zm2.1-1.6h.7v-4.5h1.8v3h.7v-3h1.8v4.5h.7v-5.2H6.4Zm7.5 0h.7v-1.5h3v-3.7h-3.7Zm.7-4.5h2.3v2.3h-2.3Z"/>
    </Icon>
  );
});

IconMaterial14mpW100Filled.displayName = 'AmauiIconMaterial14mpW100Filled';

export default IconMaterial14mpW100Filled;
