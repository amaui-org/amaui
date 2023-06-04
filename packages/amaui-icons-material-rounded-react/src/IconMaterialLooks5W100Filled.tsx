import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks5W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks5W100Filled'

      short_name='Looks5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 16.35h2.85q.65 0 1.075-.425.425-.425.425-1.075v-1.7q0-.65-.425-1.075-.425-.425-1.075-.425h-2.5v-3.3h3.675q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4q-.15 0-.25.1t-.1.25v4q0 .15.1.25t.25.1h2.85q.35 0 .575.225.225.225.225.575v1.7q0 .35-.225.575-.225.225-.575.225H9.975q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialLooks5W100Filled.displayName = 'AmauiIconMaterialLooks5W100Filled';

export default IconMaterialLooks5W100Filled;
