import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter4Filled'

      short_name='Filter4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 18V2h16v16Zm-4 4V6h2v14h14v2Zm13-7h2V5h-2v4h-2V5h-2v6h4Z"/>
    </Icon>
  );
});

IconMaterialFilter4Filled.displayName = 'AmauiIconMaterialFilter4Filled';

export default IconMaterialFilter4Filled;
