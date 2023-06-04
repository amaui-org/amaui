import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindowOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpen'

      short_name='WindowOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V3h16v18Zm2-10h5v-1h2v1h5V5H6Zm0 8h12H6Z"/>
    </Icon>
  );
});

IconMaterialWindowOpen.displayName = 'AmauiIconMaterialWindowOpen';

export default IconMaterialWindowOpen;
