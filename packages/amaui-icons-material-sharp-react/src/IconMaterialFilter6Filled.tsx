import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter6Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter6Filled'

      short_name='Filter6'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 9V7h3V5h-5v10h6V9Zm0 2h2v2h-2Zm-7 7V2h16v16Zm-4 4V6h2v14h14v2Z"/>
    </Icon>
  );
});

IconMaterialFilter6Filled.displayName = 'AmauiIconMaterialFilter6Filled';

export default IconMaterialFilter6Filled;
