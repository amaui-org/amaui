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
      <path d="M2 21V7l10-4 10 4v14h-6v-8H8v8Zm7 0v-2h2v2Zm2-3v-2h2v2Zm2 3v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialWarehouseFilled.displayName = 'AmauiIconMaterialWarehouseFilled';

export default IconMaterialWarehouseFilled;
