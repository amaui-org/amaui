import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecentActorsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentActorsW100Filled'

      short_name='RecentActors'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.7 17.7q-.3 0-.5-.2T2 17V7q0-.3.2-.5t.5-.2h10q.3 0 .5.2t.2.5v10q0 .3-.2.5t-.5.2Zm14.65 0q-.15 0-.25-.1t-.1-.25V6.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v10.7q0 .15-.1.25t-.25.1Zm4.3 0q-.15 0-.25-.1t-.1-.25V6.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v10.7q0 .15-.1.25t-.25.1ZM2.7 16.2q1.1-.725 2.35-1.138 1.25-.412 2.65-.412t2.65.412q1.25.413 2.35 1.138V7h-10Zm5-3.35q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688Z"/>
    </Icon>
  );
});

IconMaterialRecentActorsW100Filled.displayName = 'AmauiIconMaterialRecentActorsW100Filled';

export default IconMaterialRecentActorsW100Filled;
