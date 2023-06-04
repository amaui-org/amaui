import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartSquareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartSquareW100Filled'

      short_name='LineStartSquare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.95 15.45h-6.9v-6.9h6.9v3.1h9.65v.7h-9.65Z"/>
    </Icon>
  );
});

IconMaterialLineStartSquareW100Filled.displayName = 'AmauiIconMaterialLineStartSquareW100Filled';

export default IconMaterialLineStartSquareW100Filled;
