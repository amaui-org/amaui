import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentSharpW700Filled'
      short_name='Comment'

      {...props}
    >
      <path d="M6 14H18V12H6ZM6 11H18V9H6ZM6 8H18V6H6ZM22.85 22.85 18.85 18.85H1.15V1.15H22.85Z"/>
    </Icon>
  )
});

export default IconMaterialCommentSharpW700Filled;
