import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowClosedTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowClosedTwoTone'
      short_name='WindowClosed'

      {...props}
    >
      <path d="M4 21V3h16v18Zm2-10h5v-1h2v1h5V5H6Zm0 8h12v-6H6Zm0 0h12H6Z"/>
    </Icon>
  );
});

IconMaterialWindowClosedTwoTone.displayName = 'AmauiIconMaterialWindowClosedTwoTone';

export default IconMaterialWindowClosedTwoTone;
