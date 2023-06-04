import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthWide = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthWide'

      short_name='WidthWide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm2-2h2V6H4Zm4 0h8V6H8Zm10 0h2V6h-2ZM8 6v12Z"/>
    </Icon>
  );
});

IconMaterialWidthWide.displayName = 'AmauiIconMaterialWidthWide';

export default IconMaterialWidthWide;
