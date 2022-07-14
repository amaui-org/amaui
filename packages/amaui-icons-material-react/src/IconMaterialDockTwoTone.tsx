import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDockTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockTwoTone'
      short_name='Dock'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 5h8v10H8z" opacity=".3"/><path d="M8 21h8v2H8zm8-19.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z"/>
    </Icon>
  );
});

export default IconMaterialDockTwoTone;
