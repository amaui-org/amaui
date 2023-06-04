import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeStorageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeStorageW100'

      short_name='HomeStorage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.1 18.9 4.525 9.5h14.95L17.9 18.9Zm.575-.7h10.65l1.275-8H5.4Zm2.975-4.65h4.7v-.7h-4.7ZM5.65 8v-.7h12.7V8Zm2-2.2v-.7h8.7v.7Zm-.975 12.4h10.65Z"/>
    </Icon>
  );
});

IconMaterialHomeStorageW100.displayName = 'AmauiIconMaterialHomeStorageW100';

export default IconMaterialHomeStorageW100;
