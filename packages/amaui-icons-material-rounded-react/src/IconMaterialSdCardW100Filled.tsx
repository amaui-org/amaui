import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdCardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardW100Filled'

      short_name='SdCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.1 10.7q.15 0 .25-.1t.1-.25V7.8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.55q0 .15.1.25t.25.1Zm2.75 0q.15 0 .25-.1t.1-.25V7.8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.55q0 .15.1.25t.25.1Zm2.75 0q.15 0 .25-.1t.1-.25V7.8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.55q0 .15.1.25t.25.1Zm-8.8 10q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V9.175q0-.3.113-.575.112-.275.337-.5l4.35-4.35q.225-.225.5-.338.275-.112.575-.112H17.2q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSdCardW100Filled.displayName = 'AmauiIconMaterialSdCardW100Filled';

export default IconMaterialSdCardW100Filled;
