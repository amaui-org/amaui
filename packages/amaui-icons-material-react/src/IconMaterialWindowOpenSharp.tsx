import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowOpenSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpenSharp'
      short_name='WindowOpen'

      {...props}
    >
      <path d="M4 21V3h16v18Zm2-10h5v-1h2v1h5V5H6Zm0 8h12H6Z"/>
    </Icon>
  );
});

export default IconMaterialWindowOpenSharp;
