import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSevereColdW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SevereColdW100Filled'

      short_name='SevereCold'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 9.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-9 12q-.15 0-.25-.1t-.1-.25v-4.175l-3 3.025q-.1.1-.25.1t-.25-.1q-.1-.1-.1-.25t.1-.25l3.5-3.475V13.35H8.125l-3.475 3.5q-.1.1-.25.1t-.25-.1q-.1-.1-.1-.25t.1-.25l3.025-3H3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.175l-3.025-3q-.1-.1-.1-.25t.1-.25q.1-.1.25-.1t.25.1l3.475 3.5h2.525v-2.525L7.15 6.65q-.1-.1-.1-.25t.1-.25q.1-.1.25-.1t.25.1l3 3.025V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.175l3-3.025q.1-.1.25-.1t.25.1q.1.1.1.25t-.1.25l-3.5 3.475v2.525H19q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-4.175l3.025 3q.1.1.1.25t-.1.25q-.1.1-.25.1t-.25-.1l-3.475-3.5H11.35v2.525l3.5 3.475q.1.1.1.25t-.1.25q-.1.1-.25.1t-.25-.1l-3-3.025V21q0 .15-.1.25t-.25.1Zm9-14.7q-.15 0-.25-.1t-.1-.25V3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.3q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialSevereColdW100Filled.displayName = 'AmauiIconMaterialSevereColdW100Filled';

export default IconMaterialSevereColdW100Filled;
