import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarehouse = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Warehouse'

      short_name='Warehouse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19h2v-8h12v8h2V8.35l-8-3.2-8 3.2Zm-2 2V7l10-4 10 4v14h-6v-8H8v8Zm7 0v-2h2v2Zm2-3v-2h2v2Zm2 3v-2h2v2ZM6 11h12Z"/>
    </Icon>
  );
});

IconMaterialWarehouse.displayName = 'AmauiIconMaterialWarehouse';

export default IconMaterialWarehouse;
