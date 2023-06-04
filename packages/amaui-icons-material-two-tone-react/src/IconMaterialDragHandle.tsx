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
      <path d="M0 0h24v24H0z" fill="none"/><path d="M4 9h16v2H4zm0 4h16v2H4z"/>
    </Icon>
  );
});

IconMaterialDragHandle.displayName = 'AmauiIconMaterialDragHandle';

export default IconMaterialDragHandle;
