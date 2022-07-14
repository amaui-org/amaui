import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoCameraTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraTwoTone'
      short_name='PhotoCamera'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 6h-4.05l-1.83-2H9.88L8.05 6H4v12h16V6zm-8 11c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" opacity=".3"/><path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 6h4.05l1.83-2h4.24l1.83 2H20v12H4V6zm8 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
    </Icon>
  );
});

export default IconMaterialPhotoCameraTwoTone;
