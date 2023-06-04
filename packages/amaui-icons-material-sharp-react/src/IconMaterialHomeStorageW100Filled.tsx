import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeStorageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeStorageW100Filled'

      short_name='HomeStorage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.1 18.9 4.525 9.5h14.95L17.9 18.9Zm3.55-5.35h4.7v-.7h-4.7ZM5.65 8v-.7h12.7V8Zm2-2.2v-.7h8.7v.7Z"/>
    </Icon>
  );
});

IconMaterialHomeStorageW100Filled.displayName = 'AmauiIconMaterialHomeStorageW100Filled';

export default IconMaterialHomeStorageW100Filled;
