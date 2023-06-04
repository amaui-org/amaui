import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDragHandle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragHandle'

      short_name='DragHandle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 15v-2h16v2Zm0-4V9h16v2Z"/>
    </Icon>
  );
});

IconMaterialDragHandle.displayName = 'AmauiIconMaterialDragHandle';

export default IconMaterialDragHandle;
