import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarehouseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarehouseW100'

      short_name='Warehouse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19h3.3v-8h9.4v8H20V8.35l-8-3.2-8 3.2Zm-.7.7V7.875L12 4.4l8.7 3.475V19.7H16v-8H8v8Zm6.425 0v-1.4h1.4v1.4Zm1.575-3v-1.4h1.4v1.4Zm1.575 3v-1.4h1.4v1.4ZM7.3 11h9.4Z"/>
    </Icon>
  );
});

IconMaterialWarehouseW100.displayName = 'AmauiIconMaterialWarehouseW100';

export default IconMaterialWarehouseW100;
