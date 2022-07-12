import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardTabTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabTwoTone'
      short_name='KeyboardTab'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z"/>
    </Icon>
  )
});

export default IconMaterialKeyboardTabTwoTone;
