import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentSharpW100Filled'
      short_name='Comment'

      {...props}
    >
      <path d="M6.65 13.35H17.35V12.65H6.65ZM6.65 10.35H17.35V9.65H6.65ZM6.65 7.35H17.35V6.65H6.65ZM20.7 19.5 17.9 16.7H3.3V3.3H20.7Z"/>
    </Icon>
  )
});

export default IconMaterialCommentSharpW100Filled;
