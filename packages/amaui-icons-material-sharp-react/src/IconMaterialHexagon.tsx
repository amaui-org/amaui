import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHexagon = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hexagon'

      short_name='Hexagon'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.8 21-5.2-9 5.2-9h10.4l5.2 9-5.2 9Zm1.15-2h8.1l4.025-7-4.025-7h-8.1L3.9 12ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialHexagon.displayName = 'AmauiIconMaterialHexagon';

export default IconMaterialHexagon;
