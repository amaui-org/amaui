import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooksOneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOneW100Filled'

      short_name='LooksOne'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 16.35q.15 0 .25-.1t.1-.25V8q0-.15-.1-.25t-.25-.1h-2.025q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1h1.65v7.675q0 .125.1.225t.25.1ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialLooksOneW100Filled.displayName = 'AmauiIconMaterialLooksOneW100Filled';

export default IconMaterialLooksOneW100Filled;
