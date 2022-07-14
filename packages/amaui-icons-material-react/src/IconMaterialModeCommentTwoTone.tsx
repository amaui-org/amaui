import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialModeCommentTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCommentTwoTone'
      short_name='ModeComment'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm0 15.17L18.83 16H4V4h16v13.17z"/><path d="M4 4v12h14.83L20 17.17V4z" opacity=".3"/>
    </Icon>
  );
});

export default IconMaterialModeCommentTwoTone;
