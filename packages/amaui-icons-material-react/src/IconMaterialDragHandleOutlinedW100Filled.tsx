import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDragHandleOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragHandleOutlinedW100Filled'
      short_name='DragHandle'

      {...props}
    >
      <path d="M4.65 10.35V9.65H19.35V10.35ZM4.65 14.35V13.65H19.35V14.35Z"/>
    </Icon>
  )
});

export default IconMaterialDragHandleOutlinedW100Filled;
