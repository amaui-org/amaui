import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoLabelTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLabelTwoTone'
      short_name='VideoLabel'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 5h18v11H3z" opacity=".3"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"/>
    </Icon>
  )
});

export default IconMaterialVideoLabelTwoTone;
