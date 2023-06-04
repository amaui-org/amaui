import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDragHandleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragHandleW100Filled'

      short_name='DragHandle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 14.35v-.7h14.7v.7Zm0-4v-.7h14.7v.7Z"/>
    </Icon>
  );
});

IconMaterialDragHandleW100Filled.displayName = 'AmauiIconMaterialDragHandleW100Filled';

export default IconMaterialDragHandleW100Filled;
