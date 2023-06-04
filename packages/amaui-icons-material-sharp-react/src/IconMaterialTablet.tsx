import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTablet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tablet'

      short_name='Tablet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 20V4h22v16Zm5-2h12V6H6Zm-3 0h1V6H3Zm17 0h1V6h-1ZM3 6h1Zm17 0h1Z"/>
    </Icon>
  );
});

IconMaterialTablet.displayName = 'AmauiIconMaterialTablet';

export default IconMaterialTablet;
