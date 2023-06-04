import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StoreW100'

      short_name='Store'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.55 5.35v-.7h14.9v.7Zm.1 14v-6h-1.3v-.7l1.2-5h14.9l1.2 5v.7h-1.3v6h-.7v-6h-5.3v6Zm.7-.7h7.3v-5.3h-7.3Zm-1.3-6h15.9Zm0 0h15.9l-1.025-4.3H5.075Z"/>
    </Icon>
  );
});

IconMaterialStoreW100.displayName = 'AmauiIconMaterialStoreW100';

export default IconMaterialStoreW100;
