import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShelvesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelvesW100Filled'

      short_name='Shelves'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 21.825q-.15 0-.25-.1t-.1-.25V2.55q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.775h14V2.55q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v18.925q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V19.7H5v1.775q0 .15-.1.25t-.25.1ZM5 11h2.8V8.05q0-.325.212-.538.213-.212.538-.212h2.9q.325 0 .538.212.212.213.212.538V11H19V5.025H5Zm0 8h6.8v-2.95q0-.325.213-.538.212-.212.537-.212h2.9q.325 0 .538.212.212.213.212.538V19H19v-7.3H5Z"/>
    </Icon>
  );
});

IconMaterialShelvesW100Filled.displayName = 'AmauiIconMaterialShelvesW100Filled';

export default IconMaterialShelvesW100Filled;
