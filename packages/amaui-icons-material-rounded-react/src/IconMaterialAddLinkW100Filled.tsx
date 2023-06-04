import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddLinkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLinkW100Filled'

      short_name='AddLink'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.725 15.8q-1.575 0-2.687-1.112Q2.925 13.575 2.925 12q0-1.575 1.113-2.688Q5.15 8.2 6.725 8.2h3.15q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-3.15q-1.275 0-2.188.912-.912.913-.912 2.188 0 1.275.912 2.188.913.912 2.188.912h3.15q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm2-3.45q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm11.8-.35h-.7q0-1.275-.912-2.188Q18 8.9 16.725 8.9h-3.15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.15q1.575 0 2.688 1.112 1.112 1.113 1.112 2.688Zm-2.8 7.35q-.15 0-.25-.1t-.1-.25v-2.65h-2.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V13q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65h2.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.65V19q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAddLinkW100Filled.displayName = 'AmauiIconMaterialAddLinkW100Filled';

export default IconMaterialAddLinkW100Filled;
