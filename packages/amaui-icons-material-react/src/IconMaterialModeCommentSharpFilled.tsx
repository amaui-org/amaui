import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialModeCommentSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCommentSharpFilled'
      short_name='ModeComment'

      {...props}
    >
      <path d="M22 22 18 18H2V2H22Z"/>
    </Icon>
  )
});

export default IconMaterialModeCommentSharpFilled;
