import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReorderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReorderFilled'

      short_name='Reorder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19v-2h18v2Zm0-4v-2h18v2Zm0-4V9h18v2Zm0-4V5h18v2Z"/>
    </Icon>
  );
});

IconMaterialReorderFilled.displayName = 'AmauiIconMaterialReorderFilled';

export default IconMaterialReorderFilled;
