import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSquareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareW100Filled'

      short_name='Square'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialSquareW100Filled.displayName = 'AmauiIconMaterialSquareW100Filled';

export default IconMaterialSquareW100Filled;
