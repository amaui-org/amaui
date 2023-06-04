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
      <path d="M19 6.6q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663Q18.025 1.9 19 1.9q.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662Q19.975 6.6 19 6.6ZM3.3 19.5V3.3h11.45q-.05.175-.062.337-.013.163-.038.363 0 .775.2 1.437.2.663.55 1.213H6.65v.7h9.325q.575.6 1.362.925.788.325 1.663.325.425 0 .863-.088.437-.087.837-.262v8.45H6.1Zm3.35-9.15h10.7v-.7H6.65Zm0 3h6.7v-.7h-6.7Z"/>
    </Icon>
  );
});

IconMaterialMarkUnreadChatAltW100Filled.displayName = 'AmauiIconMaterialMarkUnreadChatAltW100Filled';

export default IconMaterialMarkUnreadChatAltW100Filled;
