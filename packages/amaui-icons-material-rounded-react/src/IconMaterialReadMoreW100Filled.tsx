import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReadMoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadMoreW100Filled'

      short_name='ReadMore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.975 12.35H2.35q-.15 0-.25-.1T2 12q0-.15.1-.25t.25-.1h7.625L6.55 8.2q-.1-.1-.1-.25t.1-.25q.1-.1.25-.1t.25.1l3.75 3.775q.225.225.225.525 0 .3-.225.525L7.05 16.3q-.1.1-.25.1t-.25-.1q-.1-.1-.1-.25t.1-.25Zm3.375-4q-.15 0-.25-.1T13 8q0-.15.1-.25t.25-.1h7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 8q-.15 0-.25-.1T13 16q0-.15.1-.25t.25-.1h7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm3-4q-.15 0-.25-.1T16 12q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialReadMoreW100Filled.displayName = 'AmauiIconMaterialReadMoreW100Filled';

export default IconMaterialReadMoreW100Filled;
