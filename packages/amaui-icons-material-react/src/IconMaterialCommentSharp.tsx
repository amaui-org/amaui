import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentSharp'
      short_name='Comment'

      {...props}
    >
      <path d="M6 14H18V12H6ZM6 11H18V9H6ZM6 8H18V6H6ZM22 22 18 18H2V2H22ZM20 4H4V16H18.825L20 17.175ZM4 16V4Z"/>
    </Icon>
  );
});

export default IconMaterialCommentSharp;
