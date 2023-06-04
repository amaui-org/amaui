import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAbcW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AbcW100Filled'

      short_name='Abc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.05 14.6q-.3 0-.5-.2t-.2-.5v-3.8q0-.3.2-.5t.5-.2h2.8q.3 0 .5.2t.2.5v.55q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-.55h-2.8v3.8h2.8v-.55q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v.55q0 .3-.2.5t-.5.2Zm-6.4 0q-.325 0-.537-.213-.213-.212-.213-.537v-3.7q0-.325.213-.538.212-.212.537-.212h2.75q.3 0 .5.2t.2.5v1.3q0 .25-.087.387-.088.138-.363.213.275.075.363.212.087.138.087.388v1.3q0 .3-.2.5t-.5.2Zm-.05-2.95h2.8V10.1h-2.8Zm0 2.25h2.8v-1.55h-2.8Zm-6.8.7q-.15 0-.25-.1t-.1-.25V10.1q0-.3.2-.5t.5-.2h2.8q.3 0 .5.2t.2.5v4.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-1.4h-2.8v1.4q0 .15-.1.25t-.25.1Zm.35-2.45h2.8V10.1h-2.8Z"/>
    </Icon>
  );
});

IconMaterialAbcW100Filled.displayName = 'AmauiIconMaterialAbcW100Filled';

export default IconMaterialAbcW100Filled;
