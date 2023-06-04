import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStorage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Storage'

      short_name='Storage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20v-4h18v4Zm2-1h2v-2H5ZM3 8V4h18v4Zm2-1h2V5H5Zm-2 7v-4h18v4Zm2-1h2v-2H5Z"/>
    </Icon>
  );
});

IconMaterialStorage.displayName = 'AmauiIconMaterialStorage';

export default IconMaterialStorage;
