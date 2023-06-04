import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLan = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Lan'

      short_name='Lan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22v-7h3v-4h5V9H8V2h8v7h-3v2h5v4h3v7h-8v-7h3v-2H8v2h3v7Zm7-15h4V4h-4ZM5 20h4v-3H5Zm10 0h4v-3h-4ZM12 7ZM9 17Zm6 0Z"/>
    </Icon>
  );
});

IconMaterialLan.displayName = 'AmauiIconMaterialLan';

export default IconMaterialLan;
