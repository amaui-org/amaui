import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialModeCommentSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCommentSharp'
      short_name='ModeComment'

      {...props}
    >
      <path d="M22 22 18 18H2V2H22ZM20 4H4V16H18.825L20 17.175ZM4 16V4Z"/>
    </Icon>
  );
});

export default IconMaterialModeCommentSharp;
