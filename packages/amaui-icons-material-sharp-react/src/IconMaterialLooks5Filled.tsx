import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks5Filled'

      short_name='Looks5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17h6v-6h-4V9h4V7H9v6h4v2H9Zm-6 4V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialLooks5Filled.displayName = 'AmauiIconMaterialLooks5Filled';

export default IconMaterialLooks5Filled;
