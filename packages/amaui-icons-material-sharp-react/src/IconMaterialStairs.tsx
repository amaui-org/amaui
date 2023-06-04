import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStairs = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stairs'

      short_name='Stairs'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 18h4.425v-3.325H13V11.35h2.575V8H18V6h-4.425v3.325H11v3.325H8.425V16H6Zm-3 3V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialStairs.displayName = 'AmauiIconMaterialStairs';

export default IconMaterialStairs;
