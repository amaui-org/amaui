import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDragHandleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragHandleSharpFilled'
      short_name='DragHandle'

      {...props}
    >
      <path d="M4 11V9H20V11ZM4 15V13H20V15Z"/>
    </Icon>
  )
});

export default IconMaterialDragHandleSharpFilled;
