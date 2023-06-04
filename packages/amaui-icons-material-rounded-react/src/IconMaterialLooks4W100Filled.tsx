import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4W100Filled'

      short_name='Looks4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 16.35q.15 0 .25-.1t.1-.25V7.975q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.25v3.65h-3.3V7.975q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.25v4q0 .15.1.25t.25.1h3.65v3.675q0 .125.1.225t.25.1ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialLooks4W100Filled.displayName = 'AmauiIconMaterialLooks4W100Filled';

export default IconMaterialLooks4W100Filled;
