import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkEmailUnreadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailUnreadW100Filled'

      short_name='MarkEmailUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 8.35q-.975 0-1.662-.688Q16.65 6.975 16.65 6q0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688ZM3.3 18.7V5.3h11.4q-.025.175-.037.337-.013.163-.013.363 0 .75.237 1.425.238.675.663 1.225L12 11 4.4 6l-.4.55 8 5.3 4.025-2.675q.575.55 1.338.862.762.313 1.637.313.425 0 .863-.088.437-.087.837-.262v8.7Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnreadW100Filled.displayName = 'AmauiIconMaterialMarkEmailUnreadW100Filled';

export default IconMaterialMarkEmailUnreadW100Filled;
