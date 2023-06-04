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
      <path d="M8 19.7H4.8q-.625 0-1.063-.438Q3.3 18.825 3.3 18.2V8.9q0-.475.262-.85.263-.375.688-.55l7.2-2.875q.275-.125.55-.125t.55.125l7.2 2.875q.425.175.688.55.262.375.262.85v9.3q0 .625-.437 1.062-.438.438-1.063.438H16v-8H8Zm1.725 0v-1.4h1.4v1.4Zm1.575-3v-1.4h1.4v1.4Zm1.575 3v-1.4h1.4v1.4Z"/>
    </Icon>
  );
});

IconMaterialWarehouseW100Filled.displayName = 'AmauiIconMaterialWarehouseW100Filled';

export default IconMaterialWarehouseW100Filled;
