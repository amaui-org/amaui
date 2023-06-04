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
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/>
    </Icon>
  );
});

IconMaterialReorder.displayName = 'AmauiIconMaterialReorder';

export default IconMaterialReorder;
