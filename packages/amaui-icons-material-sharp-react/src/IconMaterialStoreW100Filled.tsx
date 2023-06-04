import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StoreW100Filled'

      short_name='Store'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.55 5.35v-.7h14.9v.7Zm.1 14v-6h-1.3v-.7l1.2-5h14.9l1.2 5v.7h-1.3v6h-.7v-6h-5.3v6Zm.7-.7h7.3v-5.3h-7.3Z"/>
    </Icon>
  );
});

IconMaterialStoreW100Filled.displayName = 'AmauiIconMaterialStoreW100Filled';

export default IconMaterialStoreW100Filled;
