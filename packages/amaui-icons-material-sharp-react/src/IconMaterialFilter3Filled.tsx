import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter3Filled'

      short_name='Filter3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 15h6V5h-6v2h4v2h-2v2h2v2h-4Zm-5 3V2h16v16Zm-4 4V6h2v14h14v2Z"/>
    </Icon>
  );
});

IconMaterialFilter3Filled.displayName = 'AmauiIconMaterialFilter3Filled';

export default IconMaterialFilter3Filled;
