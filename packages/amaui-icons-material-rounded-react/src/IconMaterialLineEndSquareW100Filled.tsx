import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndSquareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndSquareW100Filled'

      short_name='LineEndSquare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.05 15.45v-3.1H3.4v-.7h9.65v-3.1h6.9v6.9Z"/>
    </Icon>
  );
});

IconMaterialLineEndSquareW100Filled.displayName = 'AmauiIconMaterialLineEndSquareW100Filled';

export default IconMaterialLineEndSquareW100Filled;
