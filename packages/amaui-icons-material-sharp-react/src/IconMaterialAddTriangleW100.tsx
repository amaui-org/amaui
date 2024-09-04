import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddTriangleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddTriangleW100'

      short_name='AddTriangle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m93-172 387-656 388 656H93Zm48-28h679L480-772 141-200Zm325-87h28v-77h79v-28h-79v-76h-28v76h-78v28h78v77Zm15-91Z"/>
    </Icon>
  );
});

IconMaterialAddTriangleW100.displayName = 'AmauiIconMaterialAddTriangleW100';

export default IconMaterialAddTriangleW100;
