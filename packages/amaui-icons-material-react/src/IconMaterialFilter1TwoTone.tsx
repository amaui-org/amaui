import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter1TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter1TwoTone'
      short_name='Filter1'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 17h14V3H7v14zm5-12h4v10h-2V7h-2V5z" opacity=".3"/><path d="M14 15h2V5h-4v2h2zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM1 5v16c0 1.1.9 2 2 2h16v-2H3V5H1z"/>
    </Icon>
  );
});

export default IconMaterialFilter1TwoTone;
