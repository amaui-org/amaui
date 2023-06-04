import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkUnreadChatAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkUnreadChatAltW100Filled'

      short_name='MarkUnreadChatAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 13.35q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm4-3q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm2-3.75q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663Q18.025 1.9 19 1.9q.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662Q19.975 6.6 19 6.6ZM6.1 16.7l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h9.95q-.05.175-.062.337-.013.163-.038.363 0 .775.2 1.437.2.663.55 1.213H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h8.975q.575.6 1.362.925.788.325 1.663.325.425 0 .863-.088.437-.087.837-.262v6.95q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialMarkUnreadChatAltW100Filled.displayName = 'AmauiIconMaterialMarkUnreadChatAltW100Filled';

export default IconMaterialMarkUnreadChatAltW100Filled;
