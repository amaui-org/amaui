import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderStyleTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderStyleTwoTone'
      short_name='BorderStyle'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19h2v2h-2zm0-8h2v2h-2zm0 4h2v2h-2zm-4 4h2v2h-2zM3 21h2V5h16V3H3zM19 7h2v2h-2zm-8 12h2v2h-2zm-4 0h2v2H7z"/>
    </Icon>
  );
});

export default IconMaterialBorderStyleTwoTone;
