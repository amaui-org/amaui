import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHttpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HttpW100Filled'

      short_name='Http'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 14.6q-.15 0-.25-.1t-.1-.25v-4.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h2.8V9.75q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.5q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V12.1h-2.8v2.15q0 .15-.1.25t-.25.1Zm7.2 0q-.15 0-.25-.1t-.1-.25V10.1h-1.4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-1.4v4.15q0 .15-.1.25t-.25.1Zm5 0q-.15 0-.25-.1t-.1-.25V10.1h-1.4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-1.4v4.15q0 .15-.1.25t-.25.1Zm3.7 0q-.15 0-.25-.1t-.1-.25v-4.1q0-.325.212-.538.213-.212.538-.212h1.95q.6 0 1.05.45.45.45.45 1.05v.2q0 .6-.45 1.05-.45.45-1.05.45h-2v1.65q0 .15-.1.25t-.25.1Zm.35-2.7h2q.3 0 .55-.25.25-.25.25-.55v-.2q0-.3-.25-.55-.25-.25-.55-.25h-2Z"/>
    </Icon>
  );
});

IconMaterialHttpW100Filled.displayName = 'AmauiIconMaterialHttpW100Filled';

export default IconMaterialHttpW100Filled;
