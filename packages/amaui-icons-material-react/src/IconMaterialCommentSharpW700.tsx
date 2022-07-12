import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentSharpW700'
      short_name='Comment'

      {...props}
    >
      <path d="M6 14H18V12H6ZM6 11H18V9H6ZM6 8H18V6H6ZM22.85 22.85 18.85 18.85H1.15V1.15H22.85ZM19.7 4.3H4.3V15.7H19.425L19.7 15.975ZM4.3 15.7V4.3Z"/>
    </Icon>
  )
});

export default IconMaterialCommentSharpW700;
