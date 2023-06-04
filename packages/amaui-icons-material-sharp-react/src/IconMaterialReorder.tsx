import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReorder = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Reorder'

      short_name='Reorder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19v-2h18v2Zm0-4v-2h18v2Zm0-4V9h18v2Zm0-4V5h18v2Z"/>
    </Icon>
  );
});

IconMaterialReorder.displayName = 'AmauiIconMaterialReorder';

export default IconMaterialReorder;
