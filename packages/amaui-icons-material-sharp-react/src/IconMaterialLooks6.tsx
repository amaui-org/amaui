import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks6 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks6'

      short_name='Looks6'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 11V9h3V7H9v10h6v-6Zm0 2h2v2h-2Zm-8 8V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialLooks6.displayName = 'AmauiIconMaterialLooks6';

export default IconMaterialLooks6;
