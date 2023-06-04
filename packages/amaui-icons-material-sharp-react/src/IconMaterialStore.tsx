import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Store'

      short_name='Store'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 6V4h16v2Zm0 14v-6H3v-2l1-5h16l1 5v2h-1v6h-2v-6h-4v6Zm2-2h6v-4H6Zm-.95-6h13.9Zm0 0h13.9l-.6-3H5.65Z"/>
    </Icon>
  );
});

IconMaterialStore.displayName = 'AmauiIconMaterialStore';

export default IconMaterialStore;
