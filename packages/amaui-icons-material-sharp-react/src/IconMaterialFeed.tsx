import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Feed'

      short_name='Feed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h13l5 5v13Zm2-2h14V9h-4V5H5Zm2-2h10v-2H7Zm0-8h5V7H7Zm0 4h10v-2H7ZM5 5v4-4 14Z"/>
    </Icon>
  );
});

IconMaterialFeed.displayName = 'AmauiIconMaterialFeed';

export default IconMaterialFeed;
