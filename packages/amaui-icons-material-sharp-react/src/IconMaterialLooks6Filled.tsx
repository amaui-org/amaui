import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks6Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks6Filled'

      short_name='Looks6'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 11V9h3V7H9v10h6v-6Zm0 2h2v2h-2Zm-8 8V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialLooks6Filled.displayName = 'AmauiIconMaterialLooks6Filled';

export default IconMaterialLooks6Filled;
