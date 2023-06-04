import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter2Filled'

      short_name='Filter2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 15h6v-2h-4v-2h4V5h-6v2h4v2h-4Zm-5 3V2h16v16Zm-4 4V6h2v14h14v2Z"/>
    </Icon>
  );
});

IconMaterialFilter2Filled.displayName = 'AmauiIconMaterialFilter2Filled';

export default IconMaterialFilter2Filled;
