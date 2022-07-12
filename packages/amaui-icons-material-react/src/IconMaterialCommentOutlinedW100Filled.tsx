import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentOutlinedW100Filled'
      short_name='Comment'

      {...props}
    >
      <path d="M6.65 13.35H17.35V12.65H6.65ZM6.65 10.35H17.35V9.65H6.65ZM6.65 7.35H17.35V6.65H6.65ZM20.7 19.5 17.9 16.7H4.8Q4.15 16.7 3.725 16.275Q3.3 15.85 3.3 15.2V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8Z"/>
    </Icon>
  )
});

export default IconMaterialCommentOutlinedW100Filled;
