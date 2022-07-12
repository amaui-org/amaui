import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddCommentSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCommentSharp'
      short_name='AddComment'

      {...props}
    >
      <path d="M11 14H13V11H16V9H13V6H11V9H8V11H11ZM2 22V2H22V18H6ZM4 17.175 5.175 16H20V4H4ZM4 17.175V4V16Z"/>
    </Icon>
  )
});

export default IconMaterialAddCommentSharp;
