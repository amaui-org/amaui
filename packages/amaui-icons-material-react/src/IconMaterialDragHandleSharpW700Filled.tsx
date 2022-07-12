import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDragHandleSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragHandleSharpW700Filled'
      short_name='DragHandle'

      {...props}
    >
      <path d="M3.425 11V7.85H20.575V11ZM3.425 16.15V13H20.575V16.15Z"/>
    </Icon>
  )
});

export default IconMaterialDragHandleSharpW700Filled;
