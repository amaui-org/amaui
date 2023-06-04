import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarehouseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarehouseW100Filled'

      short_name='Warehouse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V7.875L12 4.4l8.7 3.475V19.7H16v-8H8v8Zm6.425 0v-1.4h1.4v1.4Zm1.575-3v-1.4h1.4v1.4Zm1.575 3v-1.4h1.4v1.4Z"/>
    </Icon>
  );
});

IconMaterialWarehouseW100Filled.displayName = 'AmauiIconMaterialWarehouseW100Filled';

export default IconMaterialWarehouseW100Filled;
