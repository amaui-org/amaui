import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCo2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Co2W100Filled'

      short_name='Co2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.1 14.6q-.275 0-.487-.213-.213-.212-.213-.487v-3.8q0-.275.213-.488.212-.212.487-.212h2.8q.275 0 .488.212.212.213.212.488v3.8q0 .275-.212.487-.213.213-.488.213Zm0-.7h2.8v-3.8h-2.8Zm-7 .7q-.275 0-.487-.213-.213-.212-.213-.487v-3.8q0-.275.213-.488.212-.212.487-.212h2.8q.275 0 .488.212.212.213.212.488v.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-.15H4.1v3.8h2.8v-.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v.15q0 .275-.212.487-.213.213-.488.213Zm14.05 3q-.325 0-.537-.212-.213-.213-.213-.538v-1.5q0-.275.213-.487.212-.213.487-.213h2.3V13.1h-2.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65q.275 0 .488.212.212.213.212.488v1.55q0 .275-.212.487-.213.213-.488.213h-2.3v1.55h2.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialCo2W100Filled.displayName = 'AmauiIconMaterialCo2W100Filled';

export default IconMaterialCo2W100Filled;
