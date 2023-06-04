import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGrid4x4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid4x4W100Filled'

      short_name='Grid4x4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.3 20.05q-.15 0-.25-.1t-.1-.25v-2.65H4.3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65v-4H4.3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65v-4H4.3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V4.3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65h4V4.3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65h4V4.3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65h2.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.65v4h2.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.65v4h2.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.65v2.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-2.65h-4v2.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-2.65h-4v2.65q0 .15-.1.25t-.25.1Zm.35-8.4h4v-4h-4Zm0 4.7h4v-4h-4Zm4.7 0h4v-4h-4Zm0-4.7h4v-4h-4Z"/>
    </Icon>
  );
});

IconMaterialGrid4x4W100Filled.displayName = 'AmauiIconMaterialGrid4x4W100Filled';

export default IconMaterialGrid4x4W100Filled;
