import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeStorage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeStorage'

      short_name='HomeStorage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21 3 9h18l-2 12Zm1.675-2h10.65l1.275-8H5.4ZM9 15h6v-2H9ZM5 8V6h14v2Zm2-3V3h10v2Zm-.325 14h10.65Z"/>
    </Icon>
  );
});

IconMaterialHomeStorage.displayName = 'AmauiIconMaterialHomeStorage';

export default IconMaterialHomeStorage;
