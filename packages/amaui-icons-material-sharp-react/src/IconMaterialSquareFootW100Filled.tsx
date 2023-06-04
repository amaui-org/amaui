import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSquareFootW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareFootW100Filled'

      short_name='SquareFoot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19V6.55l2.4 2.4-.6.6.4.4.6-.6 2 2-.6.6.4.4.6-.6 2.1 2.1-.6.6.4.4.6-.6 2 2-.6.6.4.4.6-.6L17.45 19Zm1-1h8.3L6 9.7Z"/>
    </Icon>
  );
});

IconMaterialSquareFootW100Filled.displayName = 'AmauiIconMaterialSquareFootW100Filled';

export default IconMaterialSquareFootW100Filled;
