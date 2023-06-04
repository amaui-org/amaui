import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter5Filled'

      short_name='Filter5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 15h6V9h-4V7h4V5h-6v6h4v2h-4Zm-5 3V2h16v16Zm-4 4V6h2v14h14v2Z"/>
    </Icon>
  );
});

IconMaterialFilter5Filled.displayName = 'AmauiIconMaterialFilter5Filled';

export default IconMaterialFilter5Filled;
