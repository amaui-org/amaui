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
      <path d="M19 8.35q-.975 0-1.662-.688Q16.65 6.975 16.65 6q0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h9.9q-.025.175-.037.337-.013.163-.013.363 0 .75.237 1.425.238.675.663 1.225L12 11 4.675 6.175q-.125-.075-.263-.05-.137.025-.212.15-.1.125-.062.262.037.138.162.213l7.275 4.825q.2.125.425.125.225 0 .425-.125l3.6-2.4q.575.55 1.338.862.762.313 1.637.313.425 0 .863-.088.437-.087.837-.262v7.2q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnreadW100Filled.displayName = 'AmauiIconMaterialMarkEmailUnreadW100Filled';

export default IconMaterialMarkEmailUnreadW100Filled;
