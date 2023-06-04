import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarehouseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarehouseFilled'

      short_name='Warehouse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21H4q-.825 0-1.412-.587Q2 19.825 2 19V8.35q0-.625.338-1.125.337-.5.912-.725l8-3.2q.35-.15.75-.15t.75.15l8 3.2q.575.225.913.725.337.5.337 1.125V19q0 .825-.587 1.413Q20.825 21 20 21h-4v-8H8Zm1 0v-2h2v2Zm2-3v-2h2v2Zm2 3v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialWarehouseFilled.displayName = 'AmauiIconMaterialWarehouseFilled';

export default IconMaterialWarehouseFilled;
