import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStorageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StorageW100'

      short_name='Storage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.95 19.45v-2.9h16.1v2.9Zm1.4-.7h1.5v-1.5h-1.5Zm-1.4-11.3v-2.9h16.1v2.9Zm1.4-.7h1.5v-1.5h-1.5Zm-1.4 6.7v-2.9h16.1v2.9Zm1.4-.7h1.5v-1.5h-1.5Z"/>
    </Icon>
  );
});

IconMaterialStorageW100.displayName = 'AmauiIconMaterialStorageW100';

export default IconMaterialStorageW100;
