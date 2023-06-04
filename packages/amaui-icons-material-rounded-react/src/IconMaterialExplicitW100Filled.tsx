import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExplicitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplicitW100Filled'

      short_name='Explicit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.4 16.35H14q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.65v-3.3H14q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.65v-3.3H14q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.6q-.325 0-.537.212-.213.213-.213.538v7.2q0 .325.213.537.212.213.537.213ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialExplicitW100Filled.displayName = 'AmauiIconMaterialExplicitW100Filled';

export default IconMaterialExplicitW100Filled;
