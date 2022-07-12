import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsLadderSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLadderSharpFilled'
      short_name='ToolsLadder'

      {...props}
    >
      <path d="m4.7 21 5-18h2l-.85 3h5.625l.825-3h2l-5 18h-2l.85-3H7.525L6.7 21Zm4.775-10h5.6l.825-3h-5.6ZM8.1 16h5.6l.825-3h-5.6Z"/>
    </Icon>
  )
});

export default IconMaterialToolsLadderSharpFilled;
