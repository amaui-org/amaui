import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStairsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StairsFilled'

      short_name='Stairs'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 18h4.425v-3.325H13V11.35h2.575V8H18V6h-4.425v3.325H11v3.325H8.425V16H6Zm-3 3V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialStairsFilled.displayName = 'AmauiIconMaterialStairsFilled';

export default IconMaterialStairsFilled;
