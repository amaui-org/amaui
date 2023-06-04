import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDragHandleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragHandleFilled'

      short_name='DragHandle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 15v-2h16v2Zm0-4V9h16v2Z"/>
    </Icon>
  );
});

IconMaterialDragHandleFilled.displayName = 'AmauiIconMaterialDragHandleFilled';

export default IconMaterialDragHandleFilled;
