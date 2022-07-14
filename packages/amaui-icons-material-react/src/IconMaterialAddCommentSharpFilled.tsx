import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddCommentSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCommentSharpFilled'
      short_name='AddComment'

      {...props}
    >
      <path d="M11 14H13V11H16V9H13V6H11V9H8V11H11ZM2 22V2H22V18H6Z"/>
    </Icon>
  );
});

export default IconMaterialAddCommentSharpFilled;
