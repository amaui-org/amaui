import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthFull'

      short_name='WidthFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm2-2h1V6H4Zm3 0h10V6H7Zm12 0h1V6h-1ZM7 6v12Z"/>
    </Icon>
  );
});

IconMaterialWidthFull.displayName = 'AmauiIconMaterialWidthFull';

export default IconMaterialWidthFull;
