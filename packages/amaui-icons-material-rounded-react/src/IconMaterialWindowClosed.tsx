import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindowClosed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowClosed'

      short_name='WindowClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V3h16v18Zm2-10h5v-1h2v1h5V5H6Zm0 8h12v-6H6Zm0 0h12H6Z"/>
    </Icon>
  );
});

IconMaterialWindowClosed.displayName = 'AmauiIconMaterialWindowClosed';

export default IconMaterialWindowClosed;
