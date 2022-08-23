import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStoreSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StoreSharpW100Filled'
      short_name='Store'

      {...props}
    >
      <path d="M4.55 5.35V4.65H19.45V5.35ZM4.65 19.35V13.35H3.35V12.65L4.55 7.65H19.45L20.65 12.65V13.35H19.35V19.35H18.65V13.35H13.35V19.35ZM5.35 18.65H12.65V13.35H5.35Z"/>
    </Icon>
  );
});

IconMaterialStoreSharpW100Filled.displayName = 'AmauiIconMaterialStoreSharpW100Filled';

export default IconMaterialStoreSharpW100Filled;
