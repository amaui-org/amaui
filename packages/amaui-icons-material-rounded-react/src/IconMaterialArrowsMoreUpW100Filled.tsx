import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowsMoreUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreUpW100Filled'

      short_name='ArrowsMoreUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.35 14.025q-.15 0-.25-.1t-.1-.25v-8.65H8.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8.6q.325 0 .538.212.212.213.212.538v8.6q0 .15-.1.25t-.25.1Zm-3.7 3.675q-.15 0-.25-.1t-.1-.25V8.7H4.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8.6q.325 0 .538.212.212.213.212.538v8.6q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreUpW100Filled.displayName = 'AmauiIconMaterialArrowsMoreUpW100Filled';

export default IconMaterialArrowsMoreUpW100Filled;
