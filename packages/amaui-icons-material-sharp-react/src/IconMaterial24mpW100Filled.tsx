import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial24mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='24mpW100Filled'

      short_name='24mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.9 11.1h3.7v-.7h-3V8.85h3V5.9H6.9v.7h3v1.55h-3Zm8.75 0h.7V9.6h1.3v-.7h-1.3v-3h-.7v3h-2v-3h-.7v3.7h2.7ZM4.3 19.7V4.3h15.4v15.4Zm2.1-1.6h.7v-4.5h1.8v3h.7v-3h1.8v4.5h.7v-5.2H6.4Zm7.5 0h.7v-1.5h3v-3.7h-3.7Zm.7-4.5h2.3v2.3h-2.3Z"/>
    </Icon>
  );
});

IconMaterial24mpW100Filled.displayName = 'AmauiIconMaterial24mpW100Filled';

export default IconMaterial24mpW100Filled;
