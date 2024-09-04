import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddTriangleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddTriangleW100Filled'

      short_name='AddTriangle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m93-172 387-656 388 656H93Zm373-115h28v-77h79v-28h-79v-76h-28v76h-78v28h78v77Z"/>
    </Icon>
  );
});

IconMaterialAddTriangleW100Filled.displayName = 'AmauiIconMaterialAddTriangleW100Filled';

export default IconMaterialAddTriangleW100Filled;
