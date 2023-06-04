import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReorderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReorderW100Filled'

      short_name='Reorder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 18.35v-.7h16.7v.7Zm0-4v-.7h16.7v.7Zm0-4v-.7h16.7v.7Zm0-4v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialReorderW100Filled.displayName = 'AmauiIconMaterialReorderW100Filled';

export default IconMaterialReorderW100Filled;
