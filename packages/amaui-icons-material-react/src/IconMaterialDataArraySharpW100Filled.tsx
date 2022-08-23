import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDataArraySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataArraySharpW100Filled'
      short_name='DataArray'

      {...props}
    >
      <path d="M15.65 18.85V18.15H18.15V5.85H15.65V5.15H18.85V18.85ZM5.15 18.85V5.15H8.35V5.85H5.85V18.15H8.35V18.85Z"/>
    </Icon>
  );
});

IconMaterialDataArraySharpW100Filled.displayName = 'AmauiIconMaterialDataArraySharpW100Filled';

export default IconMaterialDataArraySharpW100Filled;
